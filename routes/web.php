<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DocumentosController;
use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\OrdenesTrabajoController;
use App\Http\Controllers\PlannerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TareasController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', [PlannerController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::prefix('/clientes')->group(function () {
        Route::get('', [ClienteController::class, 'index'])->name('clientes.index')->middleware('roles:admin,administrador,gestor');
        Route::get('/create', [ClienteController::class, 'create'])->name('clientes.create')->middleware('roles:admin,administrador');
        Route::post('', [ClienteController::class, 'store'])->name('clientes.store')->middleware('roles:admin,administrador');
        Route::get('/{cliente}', [ClienteController::class, 'show'])->name('clientes.show')->middleware('roles:admin,administrador,gestor');
        Route::get('/{cliente}/edit', [ClienteController::class, 'edit'])->name('clientes.edit')->middleware('roles:admin,administrador');
        Route::put('/{cliente}', [ClienteController::class, 'update'])->name('clientes.update')->middleware('roles:admin,administrador');
        Route::delete('/{cliente}', [ClienteController::class, 'destroy'])->name('clientes.destroy')->middleware('roles:admin,administrador');
    });
    Route::prefix('/documentos/{cliente}')->group(function () {
        Route::get('', [DocumentosController::class, 'index'])->name('documentos.index')->middleware('roles:admin,administrador,gestor');
        Route::get('/create', [DocumentosController::class, 'create'])->name('documentos.create')->middleware('roles:admin,administrador');
        Route::post('', [DocumentosController::class, 'store'])->name('documentos.store')->middleware('roles:admin,administrador');
        Route::get('/{documento}', [DocumentosController::class, 'show'])->name('documentos.show')->middleware('roles:admin,administrador,gestor');
        Route::get('/{documento}/edit', [DocumentosController::class, 'edit'])->name('documentos.edit')->middleware('roles:admin,administrador');
        Route::put('/{documento}', [DocumentosController::class, 'update'])->name('documentos.update')->middleware('roles:admin,administrador');
        Route::delete('/{documento}', [DocumentosController::class, 'destroy'])->name('documentos.destroy')->middleware('roles:admin,administrador');
    });
    Route::prefix('/empleados')->group(function () {
        Route::get('', [EmpleadoController::class, 'index'])->name('empleados.index')->middleware('roles:admin,administrador');
        Route::get('/create', [EmpleadoController::class, 'create'])->name('empleados.create')->middleware('roles:admin');
        Route::post('', [EmpleadoController::class, 'store'])->name('empleados.store')->middleware('roles:admin');
        Route::get('/{empleado}', [EmpleadoController::class, 'show'])->name('empleados.show')->middleware('roles:admin');
        Route::get('/{empleado}/edit', [EmpleadoController::class, 'edit'])->name('empleados.edit')->middleware('roles:admin');
        Route::put('/{empleado}', [EmpleadoController::class, 'update'])->name('empleados.update')->middleware('roles:admin');
        Route::delete('/{empleado}', [EmpleadoController::class, 'destroy'])->name('empleados.destroy')->middleware('roles:admin');
    });
    Route::prefix('/tareas')->group(function () {
        Route::get('', [TareasController::class, 'index'])->name('tareas.index')->middleware('roles:admin,administrador,gestor');
        Route::get('/create', [TareasController::class, 'create'])->name('tareas.create')->middleware('roles:admin,administrador');
        Route::post('', [TareasController::class, 'store'])->name('tareas.store')->middleware('roles:admin,administrador');
        Route::get('/{tarea}', [TareasController::class, 'show'])->name('tareas.show')->middleware('roles:admin,administrador,gestor');
        Route::get('/{tarea}/edit', [TareasController::class, 'edit'])->name('tareas.edit')->middleware('roles:admin,administrador');
        Route::put('/{tarea}', [TareasController::class, 'update'])->name('tareas.update')->middleware('roles:admin,administrador');
        Route::delete('/{tarea}', [TareasController::class, 'destroy'])->name('tareas.destroy')->middleware('roles:admin,administrador');
    });
    Route::prefix('/ordenes-trabajo')->group(function () {
        Route::get('', [OrdenesTrabajoController::class, 'index'])->name('ordenes.index')->middleware('roles:admin,administrador,gestor');
        Route::get('/create', [OrdenesTrabajoController::class, 'create'])->name('ordenes.create')->middleware('roles:admin,administrador');
        Route::post('', [OrdenesTrabajoController::class, 'store'])->name('ordenes.store')->middleware('roles:admin,administrador');
        Route::get('/{orden}', [OrdenesTrabajoController::class, 'show'])->name('ordenes.show')->middleware('roles:admin,administrador,gestor');
        Route::get('/{orden}/edit', [OrdenesTrabajoController::class, 'edit'])->name('ordenes.edit')->middleware('roles:admin,administrador');
        Route::put('/{orden}', [OrdenesTrabajoController::class, 'update'])->name('ordenes.update')->middleware('roles:admin,administrador');
        Route::delete('/{orden}', [OrdenesTrabajoController::class, 'destroy'])->name('ordenes.destroy')->middleware('roles:admin,administrador');
    });
});
Route::get('/planner', [PlannerController::class, 'index'])->middleware(['auth', 'verified'])->name('planner')->middleware('roles:admin,administrador,gestor');;
require __DIR__.'/auth.php';
