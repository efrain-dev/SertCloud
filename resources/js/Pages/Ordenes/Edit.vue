<script>
export default {
    name: 'TareasEdit',
}
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import TareasForm from '@/Components/Tareas/Form.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import OrdenesForm from "@/Components/Ordenes/Form.vue";

const props = defineProps({
    orden: {
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
    descripcion: props.orden.descripcion,
    fecha: props.orden.fecha,
    id_cliente: props.orden.id_cliente,
    id_empleado: props.orden.id_empleado,
});
</script>

<template>
    <AuthenticatedLayout title="Editar Orden">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <OrdenesForm
                            :updating="true"
                            :form="form"
                            :empleados="empleados"
                            :clientes="clientes"
                            @submit="form.put(route('ordenes.update', orden.id_orden))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
