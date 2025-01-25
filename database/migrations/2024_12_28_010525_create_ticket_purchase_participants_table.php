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
        Schema::create('ticket_purchase_participants', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('ticket_purchase_id')->constrained()->onDelete('cascade');
            $table->foreignId('participant_id')->constrained()->onDelete('cascade');
            $table->unsignedTinyInteger('role')->default(0); // 0: buyer, 1: participant
            $table->unsignedTinyInteger('status')->default(1); // 0: Cancelled, 1: Pending, 2: Confirmed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_purchase_participants');
    }
};