<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypePaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['name' => 'Efectivo', 'description' => 'Pago en efectivo'],
            ['name' => 'QR', 'description' => 'Pago por código QR']
        ];

        foreach ($types as $type) {
            DB::table('type_payments')->insert($type);
        }
    }
}
