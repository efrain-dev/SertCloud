<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestClientes;
use App\Models\Cliente;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Inertia\Response;

class PlannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $query = DB::table('tareas as t')
            ->leftJoin('clientes', 'clientes.id', '=', 't.id_cliente')
            ->leftJoin('users', 'users.id', '=', 't.id_user')
            ->leftJoin('users as empleado', 'empleado.id', '=', 't.id_empleado')
            ->select(  't.id', DB::raw("CONCAT(clientes.nombre,' ', t.descripcion) as title"),'t.fecha_entrega as date','t.estado')
            ->orderBy('t.fecha_entrega', 'ASC');
        if (auth()->user()->role=='administrador'){
            $tareas = $query->get();
        }else{
            $tareas = $query->where('t.id_user','=',auth()->user()->id)->get();
        }
        return inertia('Planner/Index', compact('tareas'));
    }

}
