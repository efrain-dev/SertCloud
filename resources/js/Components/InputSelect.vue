<script setup>
import { ref, onMounted } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

// Exponemos el método para enfocar el select
defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <select
        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
        v-model="model"
        ref="input"
    >
        <!-- Iteramos sobre las opciones para generarlas en el select -->
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>
