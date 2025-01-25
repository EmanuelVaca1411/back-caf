<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Church;
use App\Models\Ticket;
use App\Models\TypePayment;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        $churches = Church::select('id', 'name')->get();
        $typePayments = TypePayment::select('id', 'name')->get();
        $ticket = Ticket::select('id', 'price')->where('status_id', 1)->first();

        return Inertia::render('Public/Index', [
            'churches' => $churches,
            'type_payments' => $typePayments,
            'ticket' => $ticket,
        ]);
    }

    public function create()
    {
        $churches = Church::select('id', 'name')->get();

        return Inertia::render('Public/Ticket/Create', [
            'churches' => $churches,
        ]);
    }
}
