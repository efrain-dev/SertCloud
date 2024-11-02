<script>
export default {
    name: 'OrdenesCreate',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useForm } from "@inertiajs/inertia-vue3";
import OrdenesForm from "@/Components/Ordenes/Form.vue";
const form = useForm({
    descripcion: '',
    fecha: '',
    id_cliente: '',
    id_empleado: '',
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
    <AuthenticatedLayout >
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <OrdenesForm
                            :form="form"
                            :empleados="empleados"
                            :clientes="clientes"
                            @submit="form.post(route('ordenes.store'))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
