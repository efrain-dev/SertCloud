<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetalleOrden extends Model
{
    use HasFactory;
    protected $table='detalle_orden';
    public $timestamps = false;
    protected $primaryKey='id_detalle';

    protected $fillable = [
        'descripcion',
        'total',
        'tipo',
        'id_orden',
    ];
}
