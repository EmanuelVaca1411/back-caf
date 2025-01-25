<?php

namespace App\Console\Commands;

class MakeService extends BaseMakeCommand
{
    protected $signature = 'make:service {name : The name of the service (e.g., User)} {--dto : Create the corresponding DTO}';
    protected $description = 'Create a new service class';

    public function handle()
    {
        $name = $this->argument('name');
        $serviceName = $this->addSuffix($name, 'Service');
        $servicePath = $this->getServicePath($serviceName);

        $modelName = $this->getModelName($name);
        $dtoName = $this->addSuffix($name, 'Dto');

        if (!$this->createFile($servicePath, $this->getServiceStub($serviceName, $modelName, $dtoName))) {
            $this->error("The service class {$serviceName} already exists.");
            return;
        }

        $this->info("Service class {$serviceName} created successfully!");

        if ($this->option('dto')) {
            $this->call('make:dto', ['name' => $dtoName]);
        }
    }

    protected function getModelName(string $name): string
    {
        return class_basename($name); // Infer the model name directly
    }

    protected function getServicePath(string $name): string
    {
        return app_path('Services/' . str_replace('\\', '/', $name) . '.php');
    }

    protected function getServiceStub(string $serviceName, string $modelName, string $dtoName): string
    {
        $namespace = $this->getNamespace($serviceName, 'Services');
        $className = class_basename($serviceName);
        $dtoNamespace = $this->getNamespace($dtoName, 'Dtos');
        $dtoClass = class_basename($dtoName);

        return <<<EOT
<?php

namespace {$namespace};

use {$dtoNamespace}\\{$dtoClass};
use App\Models\\{$modelName};
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class {$className}
{
    public function getAllWithPagination(int \$perPage = 10): Collection
    {
        return {$modelName}::paginate(\$perPage);
    }

    public function getAll(): Collection
    {
        return {$modelName}::all();
    }

    public function findById(string \$id): {$modelName}
    {
        return {$modelName}::findOrFail(\$id);
    }

    public function create({$dtoClass} \$dto): {$modelName}
    {
        return DB::transaction(function () use (\$dto) {
            return {$modelName}::create(\$dto->toArray());
        });
    }

    public function update(string \$id, {$dtoClass} \$dto): {$modelName}
    {
        return DB::transaction(function () use (\$id, \$dto) {
            \$model = \$this->findById(\$id);
            \$model->fill(\$dto->toArray());
            \$model->save();
            return \$model;
        });
    }

    public function deleteById(string \$id): {$modelName}
    {
        return {$modelName}::findOrFail(\$id);
    }
}
EOT;
    }
}
