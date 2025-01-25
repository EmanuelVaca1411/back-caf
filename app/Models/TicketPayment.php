<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class TicketPayment extends Model
{
    use HasUuids;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'ticket_purchase_id',
        'type_payment_id',
        'amount',
        'description',
        'image',
        'status',
    ];

    // Asesor
    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->translatedFormat('d F Y'),
        );
    }

    public function ticketPurchase()
    {
        return $this->belongsTo(TicketPurchase::class);
    }

    public function typePayment()
    {
        return $this->belongsTo(TypePayment::class);
    }
}
