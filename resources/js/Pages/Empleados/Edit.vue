<script>
export default {
    name: 'EmpleadosEdit',
}
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import EmpleadosForm from '@/Components/Empleados/Form.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
    empleado: {
        type: Object,
        required: true,
    },
})

const form = useForm({
    name: props.empleado.name,
    email: props.empleado.email,
    role: props.empleado.role,
    password: '',
    selectRole:[ {'value':'empleado', 'text':'Empleado'} ,{'value':'administrador', 'text':'Administrador'}]
});
</script>

<template>
    <AuthenticatedLayout title="Editar Cliente">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Editar Empleado
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <EmpleadosForm
                            :updating="true"
                            :form="form"
                            @submit="form.put(route('empleados.update', empleado.id))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
