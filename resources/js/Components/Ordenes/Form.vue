<script>
export default {
    name: 'OrdenesForm'
}
</script>

<script setup>
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from '@/Components/TextAreaInput.vue';
import InputSelect from '@/Components/InputSelect.vue';

defineProps({
    form: {
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
    updating: {
        type: Boolean,
        required: false,
        default: false,
    },
})

defineEmits(['submit'])
</script>

<template>
    <FormSection @submitted="$emit('submit')">
        <template #title>
            {{ updating ? 'Editar Orden' : 'Crear Orden' }}
        </template>


        <template #form>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="descripcion" value="Descripcion"/>
                <TextInput
                    id="descripcion"
                    v-model="form.descripcion"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="descripcion"
                />
                <InputError :message="$page.props.errors.descripcion" class="mt-2"/>
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="fecha" value="Fecha"/>
                <TextInput
                    id="fecha"
                    v-model="form.fecha"
                    type="date"
                    class="mt-1 block w-full"
                    autocomplete="email"
                />
                <InputError :message="$page.props.errors.fecha" class="mt-2"/>
            </div>

            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="empleados" value="Empleados"/>
                <InputSelect
                    id="empleados"
                    rows="5"
                    v-model="form.id_empleado"
                    :options="empleados"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="empleados"/>
                <InputError :message="$page.props.errors.id_empleado" class="mt-2"/>
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="clientes" value="Cliente"/>
                <InputSelect
                    id="clientes"
                    rows="5"
                    v-model="form.id_cliente"
                    :options="clientes"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="empleados"/>
                <InputError :message="$page.props.errors.id_cliente" class="mt-2"/>
            </div>
        </template>

        <template #actions>
            <PrimaryButton>
                {{ updating ? 'Actualizar' : 'Crear' }}
            </PrimaryButton>
        </template>
    </FormSection>
</template>
