<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ChurchSeeder::class,
            TicketStatusSeeder::class,
            TicketSeeder::class,
            TicketPurchaseStatusSeeder::class,
            TypePaymentSeeder::class,
            UserSeeder::class,
        ]);
    }
}