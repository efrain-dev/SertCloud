<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'TareasIndex',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    methods: {
        handleEventClick: function(arg) {
            window.location.href = '/tareas/' + arg;
        }
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                events: this.tareas
            }
        }
    }
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    tareas: {
        type: Object,
        required: true,
    },
})

</script>

<template>
    <AuthenticatedLayout title="Tareas">
        <template #header>
            <h1 class="font-semibold text-xl text-gray-800 leading-tight">
                Tareas
            </h1>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <FullCalendar :options="calendarOptions" >
                        <template v-slot:eventContent='arg'>
                            <div  :class="arg.event.extendedProps.estado =='terminado'?'bg-gray-600':''">
                                <b  @click="handleEventClick(arg.event.id)">{{ arg.event.title }} </b>
                            </div>
                        </template>
                    </FullCalendar>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>

</template>
