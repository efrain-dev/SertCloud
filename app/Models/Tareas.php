<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tareas extends Model
{
    use HasFactory;
    protected $fillable = [
        'descripcion',
        'fecha_entrega',
        'estado',
        'id_cliente',
        'id_empleado',
        'id_user',
    ];
}
