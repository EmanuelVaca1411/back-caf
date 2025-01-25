<?php

namespace App\Http\Controllers\Ticket;

use App\Http\Controllers\Controller;
use App\Http\Requests\TicketController\StoreTicketRequest;
use App\Models\Church;
use App\Models\Participant;
use App\Models\Ticket;
use App\Models\TicketPayment;
use App\Models\TicketPurchase;
use App\Models\TicketPurchaseParticipant;
use App\Models\TypePayment;
use App\Services\ParticipantService;
use App\Services\Ticket\TicketPurchaseService;
use App\Services\Ticket\TicketService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TicketController extends Controller
{
    private const PURCHASE_STATUS_PENDING = 1;
    private const PURCHASE_STATUS_RESERVED = 2;
    private const PURCHASE_STATUS_COMPLETED = 3;

    public function __construct(
        private TicketService $service,
        private TicketPurchaseService $ticketPurchaseService,
        private ParticipantService $participantService,
    ) {}

    public function index()
    {
        $ticketPurchases = $this->ticketPurchaseService->getAll();
        $participants = $this->participantService->getAll();
        $churches = Church::select('id', 'name')->get();
        $typePayments = TypePayment::select('id', 'name')->get();

        return Inertia::render('Ticket/Index', [
            'participants' => $participants,
            'churches' => $churches,
            'type_payments' => $typePayments,
            'ticket_purchases' => $ticketPurchases,
        ]);
    }

    public function store(StoreTicketRequest $request)
    {
        $ticket = $this->service->getFirstActive();
        $userId = Auth::id();

        $participants = $request->participants;
        $amount = count($participants);
        $total = 0;

        // Calcular el total
        for ($i = 0; $i < $amount; $i++) {
            $total += $ticket->price;
        }

        $paymentAmount = $request->amount;
        if ($request->is_reserved) {
            $status = self::PURCHASE_STATUS_RESERVED;
        } else {
            // Validar si es completado o pendiente
            $status = $total == $paymentAmount
                ? self::PURCHASE_STATUS_COMPLETED
                : self::PURCHASE_STATUS_PENDING;
        }

        $ticketPurchase = TicketPurchase::create([
            'ticket_id' => $ticket->id,
            'user_id' => $userId,
            'status_id' => $status,
            'total' => $total,
            'amount' => $amount,
        ]);

        // Registra el pago
        TicketPayment::create([
            'ticket_purchase_id' => $ticketPurchase->id,
            'type_payment_id' => $request->type_payment_id,
            'amount' => $paymentAmount,
        ]);

        // Data de participantes
        $ticketPurchaseParticipant = [];
        foreach ($participants as $participant) {
            $ticketPurchaseParticipant[] = [
                'ticket_purchase_id' => $ticketPurchase->id,
                'participant_id' => $participant['id'],
                'created_at' => now(),
                'updated_at' => now(),
            ];

            $total += $ticket->price;
        }

        TicketPurchaseParticipant::insert($ticketPurchaseParticipant);

        to_route('tickets.index');
    }

    public function edit(string $id)
    {
        $ticketPurchase = $this->ticketPurchaseService->findById($id);
        $typePayments = TypePayment::select('id', 'name')->get();

        // dd($ticketPurchase->paid_amount, $typePayments);

        return Inertia::render('Ticket/Edit', [
            'ticket_purchase' => $ticketPurchase,
            'type_payments' => $typePayments,
        ]);
    }
}
