<?php

namespace App\Console\Commands;

class MakeDto extends BaseMakeCommand
{
    protected $signature = 'make:dto {name : The name of the DTO (e.g., Listings/PriceType)} {--service : Create the corresponding service}';
    protected $description = 'Create a new DTO class';

    public function handle()
    {
        $name = $this->argument('name');
        $dtoName = $this->addSuffix($name, 'Dto');
        $dtoPath = $this->getDtoPath($dtoName);

        if (!$this->createFile($dtoPath, $this->getDtoStub($dtoName))) {
            $this->error("The DTO class {$dtoName} already exists.");
            return;
        }

        $this->info("DTO class {$dtoName} created successfully!");

        if ($this->option('service')) {
            $serviceName = $this->addSuffix(class_basename($name), 'Service');
            $this->call('make:service', ['name' => $serviceName]);
        }
    }

    protected function getDtoPath(string $name): string
    {
        return app_path('Dtos/' . str_replace('\\', '/', $name) . '.php');
    }

    protected function getDtoStub(string $name): string
    {
        $namespace = $this->getNamespace($name, 'Dtos');
        $className = class_basename($name);

        return <<<EOT
<?php

namespace {$namespace};

use Spatie\LaravelData\Data;

class {$className} extends Data
{
    public function __construct(
        // Add your fields here
    ) {}
}
EOT;
    }
}
