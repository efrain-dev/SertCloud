<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetalleOrdenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_orden', function (Blueprint $table) {
            $table->increments('id_detalle');
            $table->string('descripcion')->nullable();
            $table->decimal('total')->nullable();
            $table->char('tipo')->nullable();
            $table->integer('id_orden')->unsigned();
            $table->foreign('id_orden')->references('id_orden')->on('ordenes_trabajo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_orden');
    }
}
