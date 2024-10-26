<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequestDocumentos extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Puedes ajustar la autorización según tus necesidades
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'descripcion' => 'required|string|max:255',
            'imagen' => 'nullable|max:2048' // Imagen opcional con validación de tamaño y tipo
        ];
    }

    /**
     * Custom messages for validation errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'descripcion.required' => 'La descripción es obligatoria.',
            'imagen.image' => 'El archivo debe ser una imagen.',
            'imagen.mimes' => 'La imagen debe ser de tipo: jpeg, png, jpg, gif o svg.',
            'imagen.max' => 'La imagen no debe superar los 2 MB.',
            'id_cliente.exists' => 'El cliente seleccionado no es válido.',
        ];
    }
}
