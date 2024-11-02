<script>
export default {
    name: 'EmpleadosForm'
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
            {{ updating ? 'Editar Empleado' : 'Crear nuevo Empleado' }}
        </template>



        <template #form>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="nombre" value="Nombre" />
                <TextInput
                    id="nombre"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="nombre"
                />
                <InputError :message="$page.props.errors.name" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    autocomplete="email"
                />
                <InputError :message="$page.props.errors.email" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="email"
                    v-model="form.password"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="password" placeholder="Si desea cambiar la password ingrese en este campo"
                />
                <InputError :message="$page.props.errors.password" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-6">
                <InputLabel for="role" value="Rol" />
                <InputSelect
                    id="celular"
                    rows="5"
                    v-model="form.role"
                    :options="form.selectRole"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="celular"/>
                <InputError :message="$page.props.errors.role" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <PrimaryButton>
                {{ updating ? 'Actualizar' : 'Crear' }}
            </PrimaryButton>
        </template>
    </FormSection>
</template>
