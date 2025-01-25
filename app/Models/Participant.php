<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = [
        'ci',
        'first_name',
        'last_name',
        'email',
        'phone',
        'ticket_purchase_id',
        'church_id',
    ];

    public function church()
    {
        return $this->belongsTo(Church::class);
    }
}