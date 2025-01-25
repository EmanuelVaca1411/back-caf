<?php

namespace App\Dtos\Ticket;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class TicketDto extends Data
{
    public function __construct(
        public string|Optional $name,
        public string|Optional $description,
        public float $price,
        public int|Optional $quantity,
        public string|Optional $expiration_date,
        public string|Optional $cover,
        public bool|Optional $is_published,
    ) {}
}
