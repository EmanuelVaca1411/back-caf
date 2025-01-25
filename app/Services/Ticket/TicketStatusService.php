<?php

namespace App\Services\Ticket;

use App\Dtos\Ticket\TicketStatusServiceDto;
use App\Models\TicketStatusService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TicketStatusService
{
    public function getAllWithPagination(int $perPage = 10): Collection
    {
        return TicketStatusService::paginate($perPage);
    }

    public function getAll(): Collection
    {
        return TicketStatusService::all();
    }

    public function findById(string $id): TicketStatusService
    {
        return TicketStatusService::findOrFail($id);
    }

    public function create(TicketStatusServiceDto $dto): TicketStatusService
    {
        return DB::transaction(function () use ($dto) {
            return TicketStatusService::create($dto->toArray());
        });
    }

    public function update(string $id, TicketStatusServiceDto $dto): TicketStatusService
    {
        return DB::transaction(function () use ($id, $dto) {
            $model = $this->findById($id);
            $model->fill($dto->toArray());
            $model->save();
            return $model;
        });
    }

    public function deleteById(string $id): TicketStatusService
    {
        return TicketStatusService::findOrFail($id);
    }
}