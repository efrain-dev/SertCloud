<script>
export default {
    name: 'OrdenesIndex',
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
    ordenes: {
        type: Object,
        required: true,
    },
})

const deleteProject = id => {
    if (confirm('¿Estás seguro de querer eliminar esta orden?')) {
        Inertia.delete(route('ordenes.destroy', id))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Ordenes">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Ordenes
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex justify-between">
                            <Link
                                :href="route('ordenes.create')"
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar una Orden
                            </Link>
                        </div>
                        <div class="mt-4">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2">Descripcion</th>
                                        <th class="px-4 py-2">Fecha</th>
                                        <th class="px-4 py-2">Cliente</th>
                                        <th class="px-4 py-2">Empleado</th>
                                        <th class="px-4 py-2">Usuario</th>
                                        <th class="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <template v-for="item in ordenes.data">
                                        <tr>
                                            <td class="border px-4">{{ item.descripcion }}</td>
                                            <td class="border px-4">{{ item.fecha }}</td>
                                            <td class="border px-4">{{ item.cliente }}</td>
                                            <td class="border px-4">{{ item.empleado }}</td>
                                            <td class="border px-4">{{ item.usuario }}</td>
                                            <td class="border px-4 py-4" style="width: 300px">
                                                <Link
                                                    :href="route('ordenes.edit', item.id)"
                                                    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    :href="route('ordenes.show', item.id)"
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
                                    v-if="ordenes.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                    <tr>
                                        <td colspan="4" class="border px-4 py-4 text-right">
                                            <Link
                                                v-if="ordenes.current_page > 1"
                                                :href="ordenes.prev_page_url"
                                                class="px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                            >
                                                Anterior
                                            </Link>
                                            <Link
                                                v-if="ordenes.current_page < ordenes.last_page"
                                                :href="ordenes.next_page_url"
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
