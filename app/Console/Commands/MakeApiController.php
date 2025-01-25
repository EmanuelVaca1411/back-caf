<?php

namespace App\Console\Commands;

class MakeApiController extends BaseMakeCommand
{
    protected $signature = 'make:api-controller {name : The name of the controller (e.g., TypePayment)} {v=Api/V1 : The version of the API (e.g., v1)}';
    protected $description = 'Create a new API controller with basic methods and service injection';

    public function handle()
    {
        $name = $this->argument('name');
        $version = $this->argument('v');
        $controllerName = $this->addSuffix($name, 'Controller');
        $controllerPath = $this->getControllerPath($controllerName, $version);

        $modelName = class_basename($name);

        // Si no existe el archivo, lo crea
        if (!$this->createFile($controllerPath, $this->getControllerStub($controllerName, $name, $modelName))) {
            $this->error("The controller class {$controllerName} already exists.");
            return;
        }

        $this->info("Controller class {$controllerName} created successfully!");
    }

    /**
     * Obtener la ruta del controlador, infiriendo la carpeta y la clase basándose en el nombre
     */
    protected function getControllerPath(string $name, string $version): string
    {
        // Si el nombre contiene '/', separamos el nombre de la clase y el directorio
        $parts = explode('/', $name);
        $className = array_pop($parts); // El último elemento será el nombre de la clase
        $folderPath = implode('/', $parts); // El resto es el directorio

        // Generar el path final
        return app_path("Http/Controllers/{$version}/{$folderPath}/{$className}.php");
    }

    /**
     * Obtener el stub para el controlador con los namespaces correctos
     */
    protected function getControllerStub(string $controllerName, string $name, string $modelName): string
    {
        $namespace = $this->getNamespaceController($controllerName, 'Http\Controllers\Api\V1', $name);
        $className = class_basename($controllerName);
        $serviceName = $this->addSuffix($name, 'Service');
        $serviceNamespace = $this->getNamespace($serviceName, 'Services', $name);
        $serviceClass = class_basename($serviceName);

        // Los Request
        $storeRequest = $this->addSuffix('Store' . $modelName, 'Request');
        $updateRequest = $this->addSuffix('Update' . $modelName, 'Request');

        $this->info("Store Request: {$storeRequest}");
        $this->info("Update Request: {$updateRequest}");

        return <<<EOT
<?php

namespace {$namespace};

use App\Http\Controllers\Controller;
use $serviceNamespace\\$serviceClass;
use App\Http\Requests\\$className\\$storeRequest;
use App\Http\Requests\\$className\\$updateRequest;

class {$className} extends Controller
{
    private {$serviceClass} \${$serviceClass};

    public function __construct({$serviceClass} \${$serviceClass})
    {
        \$this->{$serviceClass} = \${$serviceClass};
    }

    public function index()
    {
        \$response = \$this->{$serviceClass}->getAll();
        return \$this->successResponse(\$response);
    }

    public function show(string \$id)
    {
        \$response = \$this->{$serviceClass}->findById(\$id);
        return \$this->successResponse(\$response);
    }

    public function store({$storeRequest} \$request)
    {
        \$response = \$this->{$serviceClass}->create(\$request->validated());
        return \$this->successResponse(\$response, 201);
    }

    public function update({$updateRequest} \$request, string \$id)
    {
        \$response = \$this->{$serviceClass}->update(\$id, \$request->validated());
        return \$this->successResponse(\$response);
    }

    public function destroy(string \$id)
    {
        \$this->{$serviceClass}->delete(\$id);
        return \$this->successResponse(null, 204);
    }
}
EOT;
    }

    /**
     * Obtener el namespace correcto, con soporte para subcarpetas
     */
    private function getNamespaceController(string $name, string $baseNamespace, string $controllerName): string
    {
        // Si el nombre contiene '/', significa que se debe usar una subcarpeta
        $parts = explode('/', $controllerName);
        if (count($parts) > 1) {
            return "App\\{$baseNamespace}\\{$parts[0]}";
        }

        // Si no tiene '/', se asume que es la raíz
        return "App\\{$baseNamespace}";
    }

    /**
     * Obtener el nombre del módulo para usarlo en los Request
     */
    private function getModuleName(string $controllerName): string
    {
        // Se asume que el nombre del módulo es la primera parte del nombre del controlador
        $parts = explode('/', $controllerName);
        return ucfirst($parts[0]);
    }
}
