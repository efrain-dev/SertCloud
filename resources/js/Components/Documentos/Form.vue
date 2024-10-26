<script>
export default {
    name: 'DocumentosForm'
}
</script>

<script setup>
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    form: {
        type: Object,
        required: true,
    },
    updating: {
        type: Boolean,
        required: false,
        default: false,
    }
})

defineEmits(['submit'])
</script>

<template>
    <FormSection @submitted="$emit('submit')">
        <template #title>
            {{ updating ? 'Editar Tarea' : 'Crear nueva Tarea' }}
        </template>

        <template #form>
            <!-- Campo de descripción -->
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="descripcion" value="Descripción"/>
                <TextInput
                    id="descripcion"
                    v-model="form.descripcion"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="descripcion"
                />
                <InputError :message="$page.props.errors.descripcion" class="mt-2"/>
            </div>

            <!-- Campo de imagen -->
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="imagen" value="Imagen"/>
                <input
                    id="imagen"
                    type="file"
                    class="mt-1 block w-full"
                    @change="(e) => form.imagen = e.target.files[0]"
                />
                <InputError :message="$page.props.errors.imagen" class="mt-2"/>
            </div>
        </template>

        <template #actions>
            <PrimaryButton>
                {{ updating ? 'Actualizar' : 'Crear' }}
            </PrimaryButton>
        </template>
    </FormSection>
</template>
