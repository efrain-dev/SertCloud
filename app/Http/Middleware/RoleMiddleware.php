<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ...$roles)
    {
        if (!auth()->user() || !auth()->user()->hasRole($roles)) {
            return redirect()->back()->with('flash', 'No tienes permiso para realizar esta acción.');
        }

        return $next($request);
    }
}
