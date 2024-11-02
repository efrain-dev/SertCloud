<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestClientes;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Inertia\Response;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $search = $request->input('search');

        $clientes = Cliente::query()
            ->when($search, function ($query, $search) {
                $query->where('nombre', 'like', '%' . $search . '%')
                    ->orWhere('nit', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('celular', 'like', '%' . $search . '%')
                    ->orWhere('documento', 'like', '%' . $search . '%');
            })
            ->orderBy('id', 'asc')
            ->paginate(10);
        return inertia('Clientes/Index', [
            'clientes' => $clientes
        ]);
    }
    public function create(): Response
    {
        return inertia('Clientes/Create');
    }
    public function store(PostRequestClientes $request)
    {

       $cliente =  Cliente::create($request->validated());
        return redirect()->route('clientes.show', $cliente);
    }

    public function show(Cliente $cliente)
    {
        return inertia('Clientes/Detail', [
            'cliente' => $cliente
        ]);
    }
    public function edit(Cliente $cliente): Response
    {
        return inertia('Clientes/Edit', [
            'cliente' => $cliente
        ]);
    }

    public function update(PostRequestClientes $request, Cliente $cliente)
    {

        $cliente->update($request->validated());

        return redirect()->route('clientes.show', $cliente);
    }

    public function destroy(Cliente $cliente)
    {
        $cliente->delete();
        return redirect()->route('clientes.index');
    }
}
