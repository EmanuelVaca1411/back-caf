<?php

namespace App\Services\Ticket;

use App\Dtos\Ticket\TicketDto;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TicketService
{
    private const ACTIVE_STATU_ID = 1;

    public function getAllWithPagination(int $perPage = 10): Collection
    {
        return Ticket::paginate($perPage);
    }

    public function getAll(): Collection
    {
        return Ticket::select(
            'id',
            'name',
            'price',
            'expiration_date',
            'reservation_fee',
            'reservation_deadline',
            'available_quantity',
            'cover'
        )
            ->where('is_published', true)
            ->get();
    }

    public function getFirstActive()
    {
        return Ticket::select(
            'id',
            'name',
            'price',
            'expiration_date',
            'reservation_fee',
            'reservation_deadline',
            'available_quantity',
            'cover',
            'status_id',
        )->where('status_id', self::ACTIVE_STATU_ID)
            ->first();
    }

    public function findById(string $id): Ticket
    {
        return Ticket::findOrFail($id);
    }

    public function create(TicketDto $dto): Ticket
    {
        return DB::transaction(function () use ($dto) {
            return Ticket::create($dto->toArray());
        });
    }

    public function update(string $id, TicketDto $dto): Ticket
    {
        return DB::transaction(function () use ($id, $dto) {
            $model = $this->findById($id);
            $model->fill($dto->toArray());
            $model->save();
            return $model;
        });
    }

    public function deleteById(string $id): Ticket
    {
        return Ticket::findOrFail($id);
    }
}
