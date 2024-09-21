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
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->date('fecha_entrega');
            $table->string('estado');
            $table->bigInteger('id_cliente')->unsigned();
            $table->foreign('id_cliente','fk_tarea_cliente')->references('id')->on('clientes');
            $table->bigInteger('id_empleado')->unsigned();
            $table->foreign('id_empleado','fk_tarea_empleados')->references('id')->on('users');
            $table->bigInteger('id_user')->unsigned();
            $table->foreign('id_user','fk_tarea_users')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
