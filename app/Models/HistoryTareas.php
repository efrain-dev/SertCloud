<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoryTareas extends Model
{
    use HasFactory;
    protected $fillable = [
        'estado',
        'id_tarea',
        'id_user',
    ];
}
