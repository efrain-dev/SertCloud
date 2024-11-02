<template>
    <div>
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart } from 'chart.js/auto';

const props = defineProps({
    chartData: {
        type: Object,
        required: true,
    },
});

const chartCanvas = ref(null); // Define la referencia para el canvas
const chartInstance = ref(null);

onMounted(() => {
    renderChart();
});

watch(() => props.chartData, renderChart);

function renderChart() {
    if (chartInstance.value) {
        chartInstance.value.destroy();
    }

    const labels = props.chartData.labels;
    const datasets = props.chartData.datasets;

    chartInstance.value = new Chart(chartCanvas.value, {
        type: 'bar', // Tipo de gráfica: puede ser 'bar', 'line', etc.
        data: {
            labels: labels,
            datasets: datasets,
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Productividad por Empleado por Mes',
                },
            },
        },
    });
}
</script>

<style scoped>
/* Opcional: Personalización del tamaño del canvas */
canvas {
    max-width: 100%;
}
</style>
