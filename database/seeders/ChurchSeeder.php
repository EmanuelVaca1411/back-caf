<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChurchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $churches = [
            [
                'name' => 'Iglesia Cristo Salva',
            ],
            [
                'name' => 'Iglesia 16 de Julio',
            ],
        ];

        foreach ($churches as $church) {
            DB::table('churches')->insert($church);
        }
    }
}
