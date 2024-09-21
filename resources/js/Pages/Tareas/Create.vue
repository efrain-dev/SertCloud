<script>
export default {
    name: 'TareasCreate',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useForm } from "@inertiajs/inertia-vue3";
import TareasForm from '@/Components/Tareas/Form.vue';
const form = useForm({
    descripcion: '',
    fecha_entrega: '',
    id_cliente: '',
    id_empleado: '',
    estado: 'creado',
    selectEstado:[ {'value':'creado', 'text':'Creado'} ,{'value':'progreso', 'text':'En Progreso'} ,{'value':'terminado', 'text':'Terminado'}]
});
defineProps({
    clientes: {
        type: Object,
        required: true,
    },
    empleados: {
        type: Object,
        required: true,
    },
})


</script>

<template>
    <AuthenticatedLayout title="Crear Tareas">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Crear Tareas
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <TareasForm
                            :form="form"
                            :empleados="empleados"
                            :clientes="clientes"
                            @submit="form.post(route('tareas.store'))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
