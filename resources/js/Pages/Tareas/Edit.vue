<script>
export default {
    name: 'TareasEdit',
}
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import TareasForm from '@/Components/Tareas/Form.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
    tarea: {
        type: Object,
        required: true,
    },
    clientes: {
        type: Object,
        required: true,
    },
    empleados: {
        type: Object,
        required: true,
    },
})

const form = useForm({
    descripcion: props.tarea.descripcion,
    fecha_entrega: props.tarea.fecha_entrega,
    id_cliente: props.tarea.id_cliente,
    id_empleado: props.tarea.id_empleado,
    estado: props.tarea.estado,
    selectEstado:[ {'value':'creado', 'text':'Creado'} ,{'value':'progreso', 'text':'En Progreso'} ,{'value':'terminado', 'text':'Terminado'}]
});
</script>

<template>
    <AuthenticatedLayout title="Editar Tarea">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Editar Tarea
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <TareasForm
                            :updating="true"
                            :form="form"
                            :empleados="empleados"
                            :clientes="clientes"
                            @submit="form.put(route('tareas.update', tarea.id))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
