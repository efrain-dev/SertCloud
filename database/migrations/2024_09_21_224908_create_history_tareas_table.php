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
        Schema::create('history_tareas', function (Blueprint $table) {
            $table->id();
            $table->string('estado');
            $table->bigInteger('id_tarea')->unsigned();
            $table->foreign('id_tarea','fk_tarea_history')->references('id')->on('tareas');
            $table->bigInteger('id_user')->unsigned();
            $table->foreign('id_user','fk_hystorytarea_users')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('history_tareas');
    }
};
