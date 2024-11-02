<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordenes extends Model
{
    use HasFactory;
    protected $table='ordenes_trabajo';
    public $timestamps = false;
    protected $primaryKey='id_orden';
    protected $fillable = [
        'descripcion',
        'fecha',
        'id_cliente',
        'id_empleado',
        'id_user',
    ];
}
