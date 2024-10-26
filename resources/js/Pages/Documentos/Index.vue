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
                        </div>
                        <div class="mt-4">
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

                                        <td class="border px-4 py-2" >
                                            <Link
                                                :href="route('documentos.show', [cliente, item.id_documento])"
                                                class="ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Ver
                                            </Link>
                                            <button
                                                class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                @click="deleteDocument(cliente,item.id_documento)"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>

                                <tfoot
                                    v-if="documentos.last_page > 1"
                                    class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
                                >
                                <tr>
                                    <td colspan="3" class="border px-4 py-4 text-right">
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
