<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->float('price')->min(0);
            $table->date('expiration_date')->nullable();
            $table->float('reservation_fee')->min(0)->nullable(); // Tarifa de reserva
            $table->date('reservation_deadline')->nullable(); // Fecha límite de reserva
            $table->unsignedInteger('available_quantity')->nullable()->min(0); // Cantidad disponible
            $table->string('cover')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
