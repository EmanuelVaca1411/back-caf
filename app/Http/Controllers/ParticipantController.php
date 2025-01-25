<?php

namespace App\Http\Controllers;

use App\Http\Requests\ParticipantController\StoreParticipantRequest;
use App\Models\Participant;
use App\Services\ParticipantService;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{

    public function __construct(private ParticipantService $participantService) {}

    /**
     * Display a listing of the resource.
     */
    public function index() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreParticipantRequest $request)
    {
        $this->participantService->store($request->validated());
        to_route('admin.tickets.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
