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
        Schema::table('ticket_payments', function (Blueprint $table) {
            $table->foreignUuid('ticket_purchase_id')->nullable()->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ticket_payments', function (Blueprint $table) {
            $table->dropForeign(['ticket_purchase_id']);
            $table->dropColumn('ticket_purchase_id');
        });
    }
};
