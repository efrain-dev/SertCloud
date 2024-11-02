<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestEmpleados;
use App\Http\Requests\PostRequestOrdenes;
use App\Http\Requests\PostRequestTareas;
use App\Models\Cliente;
use App\Models\HistoryTareas;
use App\Models\Ordenes;
use App\Models\Tareas;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Inertia\Response;

class OrdenesTrabajoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $query = DB::table('ordenes_trabajo as o')
            ->leftJoin('clientes', 'clientes.id', '=', 'o.id_cliente')
            ->leftJoin('users', 'users.id', '=', 'o.id_user')
            ->leftJoin('users as empleado', 'empleado.id', '=', 'o.id_empleado')
            ->select('o.*', 'o.id_orden as id'  ,'clientes.nombre as cliente', 'users.name as usuario', 'empleado.name as empleado')
            ->orderBy('o.fecha', 'ASC');
        if (auth()->user()->role=='administrador'||auth()->user()->role=='admin'){
            $ordenes = $query->paginate(10);
        }else{
            $ordenes = $query->where('o.id_empleado','=',auth()->user()->id)->paginate(10);
        }
        return inertia('Ordenes/Index',compact('ordenes'));
    }

    public function create(): Response
    {
        $empleados = User::where('role','=','gestor')->select('id as value','name as text')->get();
        $clientes = Cliente::select('id as value','nombre as text')->get();

        return inertia('Ordenes/Create', compact('empleados','clientes'));
    }

    public function store(PostRequestOrdenes $request)
    {

        try {
           return DB::transaction(function () use ($request) {
                $data = $request->validated();
                $data['id_user'] = Auth::user()->id;
                $item = Ordenes::create($data);
                return redirect()->route('ordenes.show', $item);
            });
        } catch (Exception $e) {
            return redirect()->route('ordenes.index');
        }
    }

    public function show(Ordenes $orden)
    {

        return inertia('Ordenes/Detail', [
            'orden' => $orden,
        ]);
    }

    public function edit(Ordenes $orden): Response
    {
        $empleados = User::where('role','=','gestor')->select('id as value','name as text')->get();
        $clientes = Cliente::select('id as value','nombre as text')->get();
        return inertia('Ordenes/Edit', compact('orden','empleados','clientes'));
    }

    public function update(PostRequestOrdenes $request, Ordenes $orden)
    {

        try {
            return DB::transaction(function () use ($request,$orden) {
                $data = $request->validated();
                $orden->update($data);
                return redirect()->route('ordenes.show', $orden);
            });
        } catch (Exception $e) {
            return redirect()->route('ordenes.index');
        }
    }

    public function destroy(Ordenes $orden)
    {
        $orden->delete();
        return redirect()->route('ordenes.index');
    }
}
