<script setup>
import { useTicketStore } from '@/store/use-ticket-store';
import ParticipantRegisterModal from './ParticipantRegisterModal.vue';
import { Button, Column, DataTable, Select } from 'primevue';
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import InputError from '@/Components/InputError.vue';

const props = defineProps({
    form: Object,
});

const page = usePage();
const participants = computed(() => page.props?.participants);
const ticketStore = useTicketStore();
const { openParticipantRegistrationModal } = ticketStore;
const selectedParticipant = ref(null);

const addParticipant = () => {
    if (!selectedParticipant.value) return;
    
    const participantExists = props.form.participants.find(p => p.id === selectedParticipant.value.id);
    if (participantExists) return;

    props.form.participants.push(selectedParticipant.value);
};

const removeParticipant = (participantId) => {
    props.form.participants = props.form.participants.filter(p => p.id !== participantId);
};
</script>

<template>
    <div class="flex justify-between">
        <h3 class="text-xl font-bold">Registrar participantes</h3>
    
        <Button label="Agregar participante" size="small" @click="openParticipantRegistrationModal" class=""  />
    </div>
    <ParticipantRegisterModal />

    <div class="mt-4">
        <h4 class="text-base font-medium mb-2">Buscar campista</h4>

        <div>
            <div class="flex items-center gap-2">
                <Select
                    input-id="participant_id"
                    v-model="selectedParticipant"
                    optionLabel="first_name"
                    :options="participants" 
                    placeholder="Buscar campista" 
                    filter
                    showClear
                    class="w-full" 
                >
                    <template #value="{ value, placeholder }">
                        <div v-if="value" class="flex items-center">
                            <span class="ml-2">{{ `${value.first_name} ${value.last_name}` }}</span>
                        </div>
                        <span v-else>
                            {{ placeholder }}
                        </span>
                    </template>
                    <template #option="{ option }">
                        <div class="flex items-center">
                            <span class="ml-2">{{ `${option.first_name} ${option.last_name}` }}</span>
                        </div>
                    </template>
                </Select>
                <Button label="Agregar" @click="addParticipant" class="p-button-outlined" />
            </div>
            <InputError class="mt-2" :message="form.errors.participants" />
        </div>
    </div>

    <div class="mt-6">
        <h4 class="text-base font-medium mb-2">Participantes seleccionados</h4>
        <DataTable :value="props.form.participants" class="w-full">
            <Column field="ci" header="Cédula" />
            <Column field="first_name" header="Nombre" />
            <Column field="last_name" header="Apellido" />
            <Column bodyClass="text-right">
                <template #body="slotProps">
                    <Button
                        label="Eliminar"
                        size="small"
                        class="p-button-danger"
                        @click="removeParticipant(slotProps.data.id)"
                    />
                </template>
            </Column>
        </DataTable>
    </div>
</template>