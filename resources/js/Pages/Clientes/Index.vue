<script>
export default {
    name: 'ClientesIndex',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    clientes: {
        type: Object,
        required: true,
    },
})

const deleteProject = id => {
    if (confirm('¿Estás seguro de querer eliminar este proyecto?')) {
        Inertia.delete(route('clientes.destroy', id))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Proyectos">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Clientes
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex justify-between">
                            <Link
                                :href="route('clientes.create')"
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar Cliente
                            </Link>
                        </div>
                        <div class="mt-4">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th class="px-4 py-2">Nombre</th>
                                        <th class="px-4 py-2">Nit</th>
                                        <th class="px-4 py-2">Email</th>
                                        <th class="px-4 py-2">Celular</th>
                                        <th class="px-4 py-2">Documento</th>
                                        <th class="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    <template v-for="item in clientes.data">
                                        <tr>
                                            <td class="border px-4">{{ item.nombre }}</td>
                                            <td class="border px-4">{{ item.nit}}</td>
                                            <td class="border px-4">{{ item.email }}</td>
                                            <td class="border px-4">{{ item.celular }}</td>
                                            <td class="border px-4">{{ item.documento }}</td>
                                            <td class="border px-4 py-4" >
                                                <Link
                                                    :href="route('clientes.edit', item.id)"
                                                    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Editar
                                                </Link>
                                                <Link
                                                    :href="route('clientes.show', item.id)"
                                                    class="ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Ver
                                                </Link>
                                                <Link
                                                    :href="route('documentos.index', item.id)"
                                                    class="ml-2 bg-amber-200 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Documentos
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
                                    v-if="clientes.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                    <tr>
                                        <td colspan="4" class="border px-4 py-4 text-right">
                                            <Link
                                                v-if="clientes.current_page > 1"
                                                :href="clientes.prev_page_url"
                                                class="px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                            >
                                                Anterior
                                            </Link>
                                            <Link
                                                v-if="clientes.current_page < clientes.last_page"
                                                :href="clientes.next_page_url"
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
