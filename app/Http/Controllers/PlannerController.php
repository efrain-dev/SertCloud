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
        if (auth()->user()->role=='administrador'||auth()->user()->role=='admin'){
            $tareas = $query->get();
        }else{
            $tareas = $query->where('t.id_empleado','=',auth()->user()->id)->get();
        }
        return inertia('Planner/Index', compact('tareas'));
    }
    public function dashboard(): Response
    {
        // Consulta de tareas agrupadas por empleado y mes
        $tareasPorEmpleado = DB::table('tareas as t')
            ->join('users as empleado', 'empleado.id', '=', 't.id_empleado')
            ->select(
                DB::raw('empleado.name as empleado'),
                DB::raw('MONTH(t.fecha_entrega) as mes'),
                DB::raw('COUNT(t.id) as total_tareas')
            )
            ->groupBy('empleado.name', 'mes')
            ->orderBy('mes')
            ->get();

        // Formateo de datos para el gráfico
        $chartData = [];
        $empleados = $tareasPorEmpleado->pluck('empleado')->unique();
        $meses = range(1, 12); // Etiquetas para cada mes

        $datasets = [];
        foreach ($empleados as $empleado) {
            $tareasPorMes = [];
            foreach ($meses as $mes) {
                $tareasMes = $tareasPorEmpleado->where('empleado', $empleado)->where('mes', $mes)->sum('total_tareas');
                $tareasPorMes[] = $tareasMes;
            }
            $datasets[] = [
                'label' => $empleado,
                'data' => $tareasPorMes,
                'backgroundColor' => 'rgba(54, 162, 235, 0.5)', // Color del gráfico
                'borderColor' => 'rgba(54, 162, 235, 1)',
                'borderWidth' => 1,
            ];
        }

        $chartData = [
            'labels' => array_map(fn($mes) => date("F", mktime(0, 0, 0, $mes, 1)), $meses),
            'datasets' => $datasets,
        ];

        return inertia('Dashboard', [
            'chartData' => $chartData,
        ]);
    }
}
