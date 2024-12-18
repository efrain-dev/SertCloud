<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;
    protected $table='documentos';
    public $timestamps = false;
    protected $primaryKey='id_documento';
    protected $fillable = [
        'imagen',
        'descripcion',
        'id_cliente',
    ];
}
