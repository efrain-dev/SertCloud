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
                                            <td class="border px-4 py-4 flex space-x-2" style="max-width: 300px">
                                                <Link
                                                    :href="route('empleados.edit', item.id)"
                                                    class="flex items-center  hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                                                >
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                                                        <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                                                    </svg>
                                                </Link>

                                                <Link
                                                    :href="route('empleados.show', item.id)"
                                                    class="flex items-center  hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"
                                                >
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
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
