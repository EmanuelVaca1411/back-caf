<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Church;
use App\Models\PageVisit;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        $visit = PageVisit::first();

        if (!$visit) {
            PageVisit::create(['count' => 1]);
        } else {
            $visit->increment('count'); // Incrementa en 1
        }

        return Inertia::render('Public/Index');
    }

    public function visit()
    {
        $visit = PageVisit::first();

        return Inertia::render('Public/Visit', [
            'visit' => $visit,
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
