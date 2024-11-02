<script>
export default {
    name: 'ClientesIndex',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Inertia} from "@inertiajs/inertia";
import {Link} from '@inertiajs/inertia-vue3';
import { ref, watch } from 'vue';

import debounce from 'lodash/debounce';

defineProps({
    clientes: {
        type: Object,
        required: true,
    },
})

const filter = ref(null);


const deleteProject = id => {
    if (confirm('¿Estás seguro de querer eliminar este proyecto?')) {
        Inertia.delete(route('clientes.destroy', id))
    }
}
watch(filter, (newFilter) => {
    fetchFilteredClientes(newFilter);
});
const fetchFilteredClientes = debounce((search) => {
    Inertia.get(route('clientes.index'), { search: search }, { preserveState: true });
}, 1000);
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
                            <input
                                type="text"
                                v-model="filter"
                                placeholder="Buscar cliente..."
                                class="border rounded px-4 py-2 w-full"
                            />
                        </div>
                        <div class="mt-4" >
                            <table class="table-auto w-full " style="overflow: auto">
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
                                        <td class="border px-4">{{ item.nit }}</td>
                                        <td class="border px-4">{{ item.email }}</td>
                                        <td class="border px-4">{{ item.celular }}</td>
                                        <td class="border px-4">{{ item.documento }}</td>
                                        <td class="border px-4 py-4 flex space-x-2" style="max-width: 300px">
                                            <Link
                                                :href="route('clientes.edit', item.id)"
                                                class="flex items-center  hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                                            >
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                                                    <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                                                </svg>
                                            </Link>

                                            <Link
                                                :href="route('clientes.show', item.id)"
                                                class="flex items-center  hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                                            >
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
                                                </svg>
                                            </Link>

                                            <Link
                                                :href="route('documentos.index', item.id)"
                                                class="flex items-center hover:bg-amber-300 text-white font-bold py-1 px-2 rounded"
                                            >
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m14 9.006h-.335a1.647 1.647 0 0 1-1.647-1.647v-1.706a1.647 1.647 0 0 1 1.647-1.647L19 12M5 12v5h1.375A1.626 1.626 0 0 0 8 15.375v-1.75A1.626 1.626 0 0 0 6.375 12H5Zm9 1.5v2a1.5 1.5 0 0 1-1.5 1.5v0a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5Z"/>
                                                </svg>
                                            </Link>

                                            <Link
                                                class="flex items-center hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                @click="deleteProject(item.id)"
                                            >
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                                                </svg>
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
                                    <td colspan=6 class="border px-4 py-4 text-right">
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
