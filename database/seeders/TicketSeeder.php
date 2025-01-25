<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ticket = [
            'name' => 'Ticket 1',
            'price' => 250,
            'reservation_fee' => 50,
            'reservation_deadline' => '2025-01-15',
            'available_quantity' => 50,
            'is_published' => true,
            'status_id' => 1, // Activado
        ];

        DB::table('tickets')->insert($ticket);
    }
}
