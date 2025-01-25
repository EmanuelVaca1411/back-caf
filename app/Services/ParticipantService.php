<?php

namespace App\Services;

use App\Dtos\ParticipantDto;
use App\Models\Participant;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ParticipantService
{
    public function getAllWithPagination(int $perPage = 10): Collection
    {
        return Participant::paginate($perPage);
    }

    public function getAll(): Collection
    {
        return Participant::select(
            'id',
            'ci',
            'first_name',
            'last_name',
            'email',
            'phone',
            'church_id'
        )->with([
            'church' => function ($query) {
                $query->select('id', 'name');
            }
        ])->orderBy('created_at', 'desc')
            ->get();
    }

    public function findById(string $id): Participant
    {
        return Participant::findOrFail($id);
    }

    public function store(array $data): Participant
    {
        return DB::transaction(function () use ($data) {
            return Participant::create($data);
        });
    }

    public function update(string $id, array $data): Participant
    {
        return DB::transaction(function () use ($id, $data) {
            $model = $this->findById($id);
            $model->fill($data);
            $model->save();
            return $model;
        });
    }

    public function deleteById(string $id): Participant
    {
        return Participant::findOrFail($id);
    }
}