<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            ['name' => 'Activado'],
            ['name' => 'Expirado'],
            ['name' => 'Cancelado'],
            ['name' => 'Agotado'],
        ];

        foreach ($statuses as $status) {
            DB::table('ticket_statuses')->insert($status);
        }
    }
}
