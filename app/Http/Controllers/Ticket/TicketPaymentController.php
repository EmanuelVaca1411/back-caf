<?php

namespace App\Http\Controllers\Ticket;

use App\Http\Controllers\Controller;
use App\Models\TicketPayment;
use App\Services\ImageService;
use Illuminate\Http\Request;

class TicketPaymentController extends Controller
{
    public function __construct(
        private ImageService $imageService
    ) {}

    public function store(Request $request)
    {
        $request->validate([
            'ticket_purchase_id' => 'required|exists:ticket_purchases,id',
            'type_payment_id' => 'required|exists:type_payments,id',
            'amount' => 'required|numeric',
            'image' => $request->type_payment_id == 2 ? 'required|image' : '',
        ]);

        $ticketPayment = new TicketPayment();
        $ticketPayment->ticket_purchase_id = $request->ticket_purchase_id;
        $ticketPayment->type_payment_id = $request->type_payment_id;
        $ticketPayment->amount = $request->amount;
        $ticketPayment->status = 2; // Ingresado por admin, estado aprobado

        if ($request->hasFile('image')) {
            $ticketPayment->image = $this->imageService->upload($request->file('image'), 'ticket_payments');
        }

        $ticketPayment->save();

        return to_route('tickets.edit', $request->ticket_purchase_id);
    }
}
