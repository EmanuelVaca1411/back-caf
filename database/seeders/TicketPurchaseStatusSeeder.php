<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketPurchaseStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            ['name' => 'Pendiente'],
            ['name' => 'Reserva'],
            ['name' => 'Completado'],
        ];

        foreach ($statuses as $status) {
            DB::table('ticket_purchase_statuses')->insert($status);
        }
    }
}
