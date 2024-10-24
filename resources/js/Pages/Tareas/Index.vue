<script>
export default {
    name: 'TareasIndex',
}
</script>

<script setup>
import { computed } from 'vue'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-vue3';
import { usePage } from '@inertiajs/vue3'
const page = usePage()

const user = computed(() => page.props.auth.user)

defineProps({
    tareas: {
        type: Object,
        required: true,
    },
})

const deleteProject = id => {
    if (confirm('¿Estás seguro de querer eliminar esta tarea?')) {
        Inertia.delete(route('tareas.destroy', id))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Tareas">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Tareas
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex justify-between">
                            <Link
                                :href="route('tareas.create')"
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar una Tarea
                            </Link>
                            {{user.role}} XD

                        </div>
                        <div class="mt-4">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2">Descripcion</th>
                                        <th class="px-4 py-2">Fecha de Entrega</th>
                                        <th class="px-4 py-2">Estado</th>
                                        <th class="px-4 py-2">Cliente</th>
                                        <th class="px-4 py-2">Empleado</th>
                                        <th class="px-4 py-2">Usuario</th>
                                        <th class="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <template v-for="item in tareas.data">
                                        <tr>
                                            <td class="border px-4">{{ item.descripcion }}</td>
                                            <td class="border px-4">{{ item.fecha_entrega }}</td>
                                            <td class="border px-4">{{ item.estado }}</td>
                                            <td class="border px-4">{{ item.cliente }}</td>
                                            <td class="border px-4">{{ item.empleado }}</td>
                                            <td class="border px-4">{{ item.usuario }}</td>
                                            <td class="border px-4 py-4" style="width: 300px">
                                                <Link
                                                    :href="route('tareas.edit', item.id)"
                                                    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    :href="route('tareas.show', item.id)"
                                                    class="ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Ver
                                                </Link>
                                                <Link
                                                    class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    @click="deleteProject(item.id)"
                                                >
                                                    Eliminar
                                                </Link>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>

                                <tfoot
                                    v-if="tareas.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                    <tr>
                                        <td colspan="4" class="border px-4 py-4 text-right">
                                            <Link
                                                v-if="tareas.current_page > 1"
                                                :href="tareas.prev_page_url"
                                                class="px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                            >
                                                Anterior
                                            </Link>
                                            <Link
                                                v-if="tareas.current_page < tareas.last_page"
                                                :href="tareas.next_page_url"
                                                class="ml-2 px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                            >
                                                Siguiente
                                            </Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
