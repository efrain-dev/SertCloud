<script>
export default {
    name: 'EmpleadosIndex',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    empleados: {
        type: Object,
        required: true,
    },
})

const deleteProject = id => {
    if (confirm('¿Estás seguro de querer eliminar este empleado?')) {
        Inertia.delete(route('empleados.destroy', id))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Empleados">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Empleados
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex justify-between">
                            <Link
                                :href="route('empleados.create')"
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar Empleado
                            </Link>
                        </div>
                        <div class="mt-4">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2">Nombre</th>
                                        <th class="px-4 py-2">Email</th>
                                        <th class="px-4 py-2">Role</th>
                                        <th class="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <template v-for="item in empleados.data">
                                        <tr>
                                            <td class="border px-4">{{ item.name }}</td>
                                            <td class="border px-4">{{ item.email }}</td>
                                            <td class="border px-4">{{ item.role }}</td>
                                            <td class="border px-4 py-4" style="width: 300px">
                                                <Link
                                                    :href="route('empleados.edit', item.id)"
                                                    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    :href="route('empleados.show', item.id)"
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
                                    v-if="empleados.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                    <tr>
                                        <td colspan="4" class="border px-4 py-4 text-right">
                                            <Link
                                                v-if="empleados.current_page > 1"
                                                :href="empleados.prev_page_url"
                                                class="px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                            >
                                                Anterior
                                            </Link>
                                            <Link
                                                v-if="empleados.current_page < empleados.last_page"
                                                :href="empleados.next_page_url"
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
