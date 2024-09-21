<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestEmpleados;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Inertia\Response;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $empleados = User::orderBy('id', 'asc')->paginate(10);
        $empleados->map(function ($data) {
            $data->password = '';
        });
        return inertia('Empleados/Index', [
            'empleados' => $empleados
        ]);
    }

    public function create(): Response
    {
        return inertia('Empleados/Create');
    }

    public function store(PostRequestEmpleados $request)
    {
        $data = $request->validated();
        $cliente = User::create($data);
        return redirect()->route('empleados.show', $cliente);
    }

    public function show(User $empleado)
    {
        return inertia('Empleados/Detail', [
            'empleado' => $empleado
        ]);
    }

    public function edit(User $empleado): Response
    {
        return inertia('Empleados/Edit', [
            'empleado' => $empleado
        ]);
    }

    public function update(PostRequestempleados $request, User $empleado)
    {
        $data = $request->validated();
        if ($data['password'] == '' || $data['password'] == null) {
            unset($data['password']);
        } else {
            $data['password'] = Hash::make($data['password']);
        }

        $empleado->update($data);
        return redirect()->route('empleados.show', $empleado);
    }

    public function destroy(User $empleado)
    {
        $empleado->delete();
        return redirect()->route('empleados.index');
    }
}
