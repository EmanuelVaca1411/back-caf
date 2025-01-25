<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MakeApiRequest extends Command
{
    protected $signature = 'make:api-request {name : The base name of the resource (e.g., User)} {--v=v1 : The API version (default is v1)}';

    protected $description = 'Create Store and Update Form Requests for a resource';

    public function handle()
    {
        $name = $this->argument('name');
        $version = $this->option('v') ?: 'v1';

        // Generar nombres de los requests
        $storeRequestName = "{$name}Controller\\Store{$name}Request";
        $updateRequestName = "{$name}Controller\\Update{$name}Request";

        // Llamar al comando make:request para Store
        $this->call('make:request', ['name' => $storeRequestName]);

        // Llamar al comando make:request para Update
        $this->call('make:request', ['name' => $updateRequestName]);

        $this->info("Store and Update Requests for {$name} created successfully in API version {$version}.");
    }
}
