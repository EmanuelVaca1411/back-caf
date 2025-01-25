<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketPurchaseParticipant extends Model
{
    protected $fillable = [
        'ticket_purchase_id',
        'participant_id',
        'role',
        'status',
    ];

    public function ticketPurchase()
    {
        return $this->belongsTo(TicketPurchase::class);
    }

    public function participant()
    {
        return $this->belongsTo(Participant::class);
    }
}