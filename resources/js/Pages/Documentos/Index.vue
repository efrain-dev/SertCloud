<script>
export default {
    name: 'DocumentosIndex',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    documentos: {
        type: Object,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
})

const deleteDocument = (cliente,id) => {
    if (confirm('¿Estás seguro de querer eliminar este documento?')) {
        Inertia.delete(route('documentos.destroy', [cliente,id]))
    }
}
</script>

<template>
    <AuthenticatedLayout title="Documentos">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Documentos
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex justify-between">
                            <Link
                                :href="route('documentos.create',cliente)"
                                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar Documento
                            </Link>
                            <Link :href="route('clientes.index')" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Volver</Link>

                        </div>
                        <div class="mt-4" style="overflow: auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2">Descripción</th>
                                    <th class="px-4 py-2">Acciones</th>
                                </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                <template v-for="item in documentos.data" :key="item.id_documento">
                                    <tr>
                                        <td class="border px-4 py-2">{{ item.descripcion }}</td>


                                        <td class="border px-4 py-4 flex space-x-2" style="max-width: 300px">

                                            <Link
                                                :href="route('documentos.show', [cliente, item.id_documento])"
                                                class="flex items-center  hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                                            >
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
                                                </svg>
                                            </Link>


                                            <Link
                                                class="flex items-center hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                @click="deleteDocument(cliente,item.id_documento)"
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
                                    v-if="documentos.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                <tr>
                                    <td colspan="2" class="border px-4 py-4 text-right">
                                        <Link
                                            v-if="documentos.current_page > 1"
                                            :href="documentos.prev_page_url"
                                            class="px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"
                                        >
                                            Anterior
                                        </Link>
                                        <Link
                                            v-if="documentos.current_page < documentos.last_page"
                                            :href="documentos.next_page_url"
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
