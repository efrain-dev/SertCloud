<script>
export default {
    name: 'ClientesCreate',
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { useForm } from "@inertiajs/inertia-vue3";
import ClienteForm from '@/Components/CLientes/Form.vue';
const props = defineProps(['nombre', 'nit', 'email', 'celular', 'documento']);
import { reactive } from 'vue'

const form = useForm({
    nombre: props.nombre || '',
    nit: props.nit || '',
    email: props.email || '',
    celular: props.celular || '',
    documento: props.documento || '',
});
</script>

<template>
    <AuthenticatedLayout title="Crear proyecto">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Crear cliente
            </h1>
        </template>

        <div class="py-12">

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <ClienteForm
                            :form="form"
                            @submit="form.post(route('clientes.store'), { preserveScroll: true, preserveState: true })"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
