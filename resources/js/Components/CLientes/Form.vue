<script>
export default {
    name: 'ClientesForm'
}
</script>

<script setup>
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from '@/Components/TextAreaInput.vue';

defineProps({
    form: {
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
            {{ updating ? 'Editar Cliente' : 'Crear nuevo cliente' }}
        </template>

<!--        <template #description>-->
<!--            {{ updating ? 'Actualiza tu proyecto' : 'Crea un nuevo proyecto.' }}-->
<!--        </template>-->

        <template #form>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="nombre" value="Nombre" />
                <TextInput
                    id="nombre"
                    v-model="form.nombre"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="nombre"
                />
                <InputError :message="$page.props.errors.nombre" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="nit" value="Nit" />
                <TextInput
                    id="name"
                    v-model="form.nit"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="nit"
                />
                <InputError :message="$page.props.errors.nit" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="email"
                />
                <InputError :message="$page.props.errors.email" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="celular" value="Celular" />
                <TextInput
                    id="celular"
                    rows="5"
                    v-model="form.celular"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="celular"
                />
                <InputError :message="$page.props.errors.celular" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="celular" value="Documento" />
                <TextInput
                    id="documento"
                    rows="5"
                    v-model="form.documento"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="documento"
                />
                <InputError :message="$page.props.errors.documento" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <PrimaryButton>
                {{ updating ? 'Actualizar' : 'Crear' }}
            </PrimaryButton>
        </template>
    </FormSection>
</template>
