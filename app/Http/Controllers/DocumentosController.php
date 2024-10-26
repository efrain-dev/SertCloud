<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequestDocumentos;
use App\Models\Cliente;
use App\Models\Documento;
use App\Models\HistoryTareas;
use App\Models\Tareas;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class DocumentosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $cliente): Response
    {
        $documentos = DB::table('documentos as d')
            ->select('d.*')
            ->where('d.id_cliente', $cliente)->paginate(10);
        $documentos->getCollection()->transform(function ($documento) {
            $documento->imagen = $documento->imagen ? asset('/' . $documento->imagen) : null;
            return $documento;
        });
        return Inertia('Documentos/Index', compact('documentos', 'cliente'));
    }

    public function create(Request $request, $cliente): Response
    {

        return Inertia('Documentos/Create', compact('cliente'));
    }

    public function store(PostRequestDocumentos $request, $cliente)
    {
        try {
            return DB::transaction(function () use ($request, $cliente) {
                $data = $request->validated();
                $data['id_cliente'] = $cliente;
                if ($request->hasFile('imagen')) {
                    $data['imagen'] = $request->file('imagen')->move('documentos', $request->file('imagen')->getClientOriginalName());
                }
                $documento = Documento::create($data);
                return redirect()->route('documentos.show', [$cliente, $documento]);
            });
        } catch (Exception $e) {
            dd($e->getMessage());
            return redirect()->route('documentos.index', $cliente);
        }
    }

    public function show(Cliente $cliente, $documento)
    {
        $documento = Documento::find($documento);
        $documento->imagen = $documento->imagen ? asset('/' . $documento->imagen) : null;
        return inertia('Documentos/Detail', compact('cliente', 'documento'));
    }

    public function edit(Cliente $cliente, $documento): Response
    {
        $documento = Documento::find($documento);
        return inertia('Documentos/Edit', compact('documento', 'cliente'));
    }

    public function update(PostRequestDocumentos $request, Cliente $cliente,$documento)
    {
        try {
            return DB::transaction(function () use ($request, $documento,$cliente) {
                $data = $request->validated();
                $documento = Documento::find($documento);
                $data['id_cliente'] = $cliente;
                // Manejar la carga de la imagen (actualizar si se proporciona una nueva)
                if ($request->hasFile('imagen')) {
                    // Eliminar la imagen antigua si existe en el directorio public/documentos
                    if ($documento->imagen && file_exists(public_path('documentos/' . $documento->imagen))) {
                        unlink(public_path('documentos/' . $documento->imagen));
                    }
                    // Guardar la nueva imagen en el directorio public/documentos
                    $data['imagen'] = $request->file('imagen')->move('documentos', $request->file('imagen')->getClientOriginalName());
                }
                $documento->update($data);
                return redirect()->route('documentos.show', $documento);
            });
        } catch (Exception $e) {
            return redirect()->route('documentos.index');
        }
    }

    public function destroy(Cliente $cliente, $documento)
    {
        $documento = Documento::find($documento);
        // Eliminar la imagen asociada si existe
        if ($documento->imagen) {
            Storage::disk('public')->delete($documento->imagen);
        }

        $documento->delete();
        return redirect()->route('documentos.index', $cliente);
    }
}
