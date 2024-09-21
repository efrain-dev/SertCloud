<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestEmpleados;
use App\Http\Requests\PostRequestTareas;
use App\Models\Cliente;
use App\Models\HistoryTareas;
use App\Models\Tareas;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Inertia\Response;

class TareasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $tareas = DB::table('tareas as t')
            ->leftJoin('clientes', 'clientes.id', '=', 't.id_cliente')
            ->leftJoin('users', 'users.id', '=', 't.id_user')
            ->leftJoin('users as empleado', 'empleado.id', '=', 't.id_empleado')
            ->select('t.*','clientes.nombre as cliente', 'users.name as usuario', 'empleado.name as empleado')
            ->orderBy('t.fecha_entrega', 'ASC')
            ->paginate(10);

        return inertia('Tareas/Index', [
            'tareas' => $tareas
        ]);
    }

    public function create(): Response
    {
        $empleados = User::where('role','=','empleado')->select('id as value','name as text')->get();
        $clientes = Cliente::select('id as value','nombre as text')->get();
        return inertia('Tareas/Create', compact('empleados','clientes'));
    }

    public function store(PostRequestTareas $request)
    {

        try {
           return DB::transaction(function () use ($request) {
                $data = $request->validated();
                $data['id_user'] = Auth::user()->id;
                $tareas = Tareas::create($data);
                HistoryTareas::create(['id_tarea'=>$tareas->id,'id_user'=>$data['id_user'],'estado'=>$data['estado']]);
                return redirect()->route('tareas.show', $tareas);
            });
        } catch (Exception $e) {
            return redirect()->route('tareas.index');
        }
    }

    public function show(Tareas $tarea)
    {
        $history = DB::table('history_tareas as h')
            ->leftJoin('users', 'users.id', '=', 'h.id_user')
            ->select('h.*', 'users.name as usuario')
            ->where('h.id_tarea',$tarea->id)
            ->orderBy('h.created_at', 'ASC')
            ->get();
        return inertia('Tareas/Detail', [
            'tarea' => $tarea,
            'history'=>$history
        ]);
    }

    public function edit(Tareas $tarea): Response
    {
        $empleados = User::where('role','=','empleado')->select('id as value','name as text')->get();
        $clientes = Cliente::select('id as value','nombre as text')->get();
        return inertia('Tareas/Edit', compact('tarea','empleados','clientes'));
    }

    public function update(PostRequestTareas $request, Tareas $tarea)
    {

        try {
            return DB::transaction(function () use ($request,$tarea) {
                $data = $request->validated();
                $tarea->update($data);
                $data['id_user'] = Auth::user()->id;
                HistoryTareas::create(['id_tarea'=>$tarea->id,'id_user'=>$data['id_user'],'estado'=>$data['estado']]);
                return redirect()->route('tareas.show', $tarea);
            });
        } catch (Exception $e) {
            return redirect()->route('tareas.index');
        }
    }

    public function destroy(Tareas $tarea)
    {
        $tarea->delete();
        return redirect()->route('tareas.index');
    }
}
