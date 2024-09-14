<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestClientes;
use App\Models\Cliente;
use Illuminate\Support\Facades\Request;
use Inertia\Response;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $clientes = Cliente::orderBy('id','asc')->paginate(2);
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
