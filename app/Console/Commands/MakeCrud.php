<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeCrud extends Command
{
    protected $signature = 'make:crud {name : The name of the CRUD entity (e.g., Listing)}';
    protected $description = 'Create a new CRUD structure (Controller, Service, DTO, and Request)';

    public function handle()
    {
        $name = $this->argument('name');

        // Crear DTO
        $this->info('Creating DTO...');
        $this->call('make:dto', ['name' => $name]);

        // Crear Service
        $this->info('Creating Service...');
        $this->call('make:service', ['name' => $name]);

        // Crear Request
        $this->info('Creating Request...');
        $this->call('make:api-request', ['name' => class_basename($name)]);

        // Crear Controller
        $this->info('Creating Controller...');
        $this->call('make:api-controller', ['name' => $name]);

        $this->info('CRUD structure created successfully!');
    }
}
