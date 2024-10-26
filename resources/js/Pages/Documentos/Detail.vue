<template>
    <AuthenticatedLayout title="Detalle Documento">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Detalle Documento
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <h1 class="text-2xl font-bold mb-4">{{ props.documento.descripcion }}</h1>
                        <div class="document-viewer">
                            <template v-if="isImage">
                                <img :src="props.documento.imagen" alt="Imagen del documento" class="h-96 w-full object-contain rounded-lg mb-4" />
                            </template>
                            <template v-else-if="isPDF">
                                <iframe :src="props.documento.imagen" style="width:100%; height:100vh" frameborder="0"></iframe>
                            </template>
                            <template v-else-if="isWord">
                                <div ref="wordContainer"></div>
                            </template>
                            <template v-else>
                                <p>No se puede previsualizar este tipo de documento.</p>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <Link :href="route('documentos.index',cliente)" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Volver</Link>
                        <button
                            class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            @click="deleteItem(props.documento.id_documento)">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import {ref, computed ,onMounted } from 'vue';
import { renderAsync } from 'docx-preview';

const props =defineProps({
    documento: {
        type: Object,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
});
const wordContainer = ref(null);

onMounted(async () => {
    if (isWord.value) {
        const response = await fetch(props.documento.imagen);
        const blob = await response.blob();
        await renderAsync(blob, wordContainer.value);
    }
});
const deleteItem = id => {
    if (confirm('¿Estás seguro de querer eliminar este documento?')) {
        Inertia.delete(route('documentos.destroy', [props.cliente,id]));
    }
};

const fileExtension = computed(() => {
    const url =  props.documento.imagen || '';
    return url.split('.').pop().toLowerCase();
});

const isImage = computed(() => ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(fileExtension.value));
const isPDF = computed(() => fileExtension.value === 'pdf');
const isWord = computed(() => ['doc', 'docx'].includes(fileExtension.value));

</script>
