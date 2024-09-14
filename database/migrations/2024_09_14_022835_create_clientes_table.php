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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id(); // Primary key (auto-increment)
            $table->string('nombre'); // Nombre del cliente
            $table->string('nit')->unique(); // NIT único
            $table->string('email')->unique(); // Correo electrónico único
            $table->string('celular'); // Celular del cliente
            $table->string('documento')->nullable(); // Documento (puede ser opcional)
            $table->timestamps(); // created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
