<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Church;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Index');
    }

    public function create()
    {
        $churches = Church::select('id', 'name')->get();

        return Inertia::render('Public/Ticket/Create', [
            'churches' => $churches,
        ]);
    }
}
