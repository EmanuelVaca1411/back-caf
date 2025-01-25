<?php

namespace App\Services\Ticket;

use App\Dtos\Ticket\TypePaymentDto;
use App\Models\TypePayment;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TypePaymentService
{
    public function getAllWithPagination(int $perPage = 10): Collection
    {
        return TypePayment::paginate($perPage);
    }

    public function getAll(): Collection
    {
        return TypePayment::all();
    }

    public function getAllIncludingTrashed(): Collection
    {
        return TypePayment::withTrashed()->get();
    }

    public function findById(string $id): TypePayment
    {
        return TypePayment::findOrFail($id);
    }

    public function create(TypePaymentDto $dto): TypePayment
    {
        return DB::transaction(function () use ($dto) {
            return TypePayment::create($dto->toArray());
        });
    }

    public function update(string $id, TypePaymentDto $dto): TypePayment
    {
        return DB::transaction(function () use ($id, $dto) {
            $model = $this->findById($id);
            $model->fill($dto->toArray());
            $model->save();
            return $model;
        });
    }

    public function softDelete(string $id): bool
    {
        $model = $this->findById($id);
        return $model->delete();
    }

    public function restore(string $id): bool
    {
        $model = TypePayment::withTrashed()->findOrFail($id);
        return $model->restore();
    }
}
