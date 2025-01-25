<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

abstract class BaseMakeCommand extends Command
{
    protected Filesystem $files;

    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    protected function createFile(string $path, string $content): bool
    {
        if ($this->files->exists($path)) {
            return false;
        }

        $this->makeDirectory(dirname($path));
        $this->files->put($path, $content);
        return true;
    }

    protected function makeDirectory(string $path): void
    {
        if (!$this->files->isDirectory($path)) {
            $this->files->makeDirectory($path, 0755, true);
        }
    }

    protected function getNamespace(string $name, string $baseFolder): string
    {
        $segments = explode('/', str_replace('\\', '/', $name));
        array_pop($segments); // Eliminar el nombre de la clase
        return 'App\\' . $baseFolder . (!empty($segments) ? '\\' . implode('\\', $segments) : '');
    }

    protected function addSuffix(string $name, string $suffix): string
    {
        return str_ends_with($name, $suffix) ? $name : "{$name}{$suffix}";
    }
}
