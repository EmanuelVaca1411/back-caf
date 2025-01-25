<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class TicketPurchase extends Model
{
    use HasUuids;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'ticket_id',
        'user_id',
        'type_payment_id',
        'status_id',
        'total',
        'amount',
    ];

    // Atributos calculados que se incluirán automáticamente
    protected $appends = [
        'paid_amount',
        'remaining_amount',
    ];

    // Accessors
    public function getPaidAmountAttribute()
    {
        return $this->payments()->sum('amount');
    }

    public function getRemainingAmountAttribute()
    {
        return $this->total - $this->paid_amount;
    }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->translatedFormat('d F Y'),
        );
    }

    // Relationships
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payments()
    {
        return $this->hasMany(TicketPayment::class);
    }

    public function ticketParticipants()
    {
        return $this->hasMany(TicketPurchaseParticipant::class);
    }

    public function status()
    {
        return $this->belongsTo(TicketPurchaseStatus::class, 'status_id', 'id');
    }
}