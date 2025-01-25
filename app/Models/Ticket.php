<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'expiration_date',
        'reservation_fee',
        'reservation_deadline',
        'available_quantity',
        'cover',
        'is_published',
        'status_id',
    ];

    protected $casts = [
        'expiration_date' => 'datetime',
        'reservation_deadline' => 'datetime',
        'is_published' => 'boolean',
    ];
}
