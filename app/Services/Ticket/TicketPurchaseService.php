<?php

namespace App\Services\Ticket;

use App\Dtos\Ticket\TicketPurchaseDto;
use App\Models\TicketPurchase;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TicketPurchaseService
{
    public function getAllWithPagination(int $perPage = 10): Collection
    {
        return TicketPurchase::paginate($perPage);
    }

    public function getAll(): Collection
    {
        return TicketPurchase::select(
            'id',
            'ticket_id',
            'user_id',
            'status_id',
            'total',
            'amount',
            'created_at',
        )
            ->with([
                'ticket',
                'status',
                'user',
                'payments' => function ($query) {
                    $query->with('typePayment')
                        ->orderBy('created_at', 'desc');
                },
                'ticketParticipants.participant.church',
            ])->orderBy('created_at', 'desc')
            ->get();
    }

    public function findById(string $id): TicketPurchase
    {
        return TicketPurchase::select(
            'id',
            'ticket_id',
            'user_id',
            'status_id',
            'total',
            'amount'
        )
            ->with([
                'ticket',
                'status',
                'user',
                'payments' => function ($query) {
                    $query->with('typePayment')
                        ->orderBy('created_at', 'desc');
                },
                'ticketParticipants.participant.church',
            ])->where('id', $id)
            ->first();
    }

    public function create(TicketPurchaseDto $dto): TicketPurchase
    {
        return DB::transaction(function () use ($dto) {
            return TicketPurchase::create($dto->toArray());
        });
    }

    public function update(string $id, TicketPurchaseDto $dto): TicketPurchase
    {
        return DB::transaction(function () use ($id, $dto) {
            $model = $this->findById($id);
            $model->fill($dto->toArray());
            $model->save();
            return $model;
        });
    }

    public function deleteById(string $id): TicketPurchase
    {
        return TicketPurchase::findOrFail($id);
    }
}
