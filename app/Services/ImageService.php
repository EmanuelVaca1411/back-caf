<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ImageService
{
    public function upload(
        UploadedFile $file,
        string $folder,
    ): string {
        try {
            $extension = $file->getClientOriginalExtension();

            if (!in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'gif'])) {
                throw new \Exception('Formato de imagen no soportado: ' . $extension);
            }

            $fileName = Str::random(20) . '.' . $extension;
            $filePath = $folder . '/' . $fileName;

            Storage::disk('public')->put($filePath, file_get_contents($file->getRealPath()));

            Log::info("Imagen guardada en: storage/app/public/{$filePath}");

            return $fileName;
        } catch (\Exception $e) {
            Log::error('Error en uploadImageFromFile: ' . $e->getMessage());
            throw new \Exception('Error al subir la imagen desde el archivo: ' . $e->getMessage());
        }
    }
}
