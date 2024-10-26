<script>
export default {
    name: 'ClientesEdit',
}
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import DocumentosForm from '@/Components/Documentos/Form.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
    documento: {
        type: Object,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
})
const form = useForm({
    descripcion: props.documento.descripcion,
    imagen: props.documento.imagen,
});
</script>

<template>
    <AuthenticatedLayout title="Editar Cliente">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Editar Documentos
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <DocumentosForm
                            :updating="true"
                            :form="form"
                            @submit="form.put(route('documentos.update',[cliente,documento.id_documento]))"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
