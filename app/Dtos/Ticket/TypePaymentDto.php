<?php

namespace App\Dtos\Ticket;

use Spatie\LaravelData\Data;

class TypePaymentDto extends Data
{
    public function __construct(
        public string $name,
        public ?string $description = null
    ) {}
}
