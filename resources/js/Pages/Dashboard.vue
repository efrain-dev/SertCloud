<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import EmployeeProductivityChart from '@/Components/EmployeeProductivityChart.vue';
import { onMounted } from 'vue';

defineProps({
    chartData: Object,
});
// Cargar el script después de montar el componente
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://dailyverses.net/get/verse.js?language=nvi';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
});
</script>

<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Versículo Diario -->
                <div class="mb-6">
                    <div class="p-4 bg-blue-100 rounded-lg shadow-md text-gray-700">
                        <h3 class="text-lg font-semibold mb-2">Versículo Diario</h3>
                        <div id="dailyVersesWrapper"></div>
                    </div>
                </div>

                <!-- Gráfica de Productividad -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h3 class="text-lg font-semibold mb-4">Productividad por Empleado</h3>
                    <EmployeeProductivityChart :chartData="chartData" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
