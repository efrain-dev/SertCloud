<script>
export default {
    name: 'TareasDetail',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

defineProps({
    tarea: {
        type: Object,
        required: true,
    },
})

const deleteItem = id => {
    if (confirm('¿Estás seguro de querer eliminar esta tarea?')) {
        Inertia.delete(route('tareas.destroy', id))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Detalle Tarea">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Detalle tarea
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <h1 class="text-2xl font-bold mb-4">{{ tarea.descripcion }}</h1>
                        <p class="text-gray-700 mb-4">{{ tarea.fecha_entrega }}</p>
                        <p class="text-gray-700 mb-4">{{ tarea.estado }}</p>
                        <p class="text-gray-700">{{ tarea.created_at }}</p>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <Link :href="route('tareas.index')" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Volver</Link>
                        <Link :href="route('tareas.edit', tarea.id)" class="ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Editar</Link>
                        <Link
                            class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            @click="deleteItem(tarea.id)">
                            Eliminar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
