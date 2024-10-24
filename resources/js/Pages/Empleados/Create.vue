<script>
export default {
    name: 'EmpleadosCreate',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useForm } from "@inertiajs/inertia-vue3";
import EmpleadoForm from '@/Components/Empleados/Form.vue';
const form = useForm({
    name: '',
    email: '',
    password: '',
    role: '',
    selectRole:[ {'value':'gestor', 'text':'Gestor'} ,{'value':'administrador', 'text':'Administrador'},{'value':'admin', 'text':'Admin'}]
});
</script>

<template>
    <AuthenticatedLayout title="Crear Empleado">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Crear Empleado
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <EmpleadoForm
                            :form="form"
                            @submit="form.post(route('empleados.store'))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
