<script setup>
import ParticipantRegister from './ParticipantRegister.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import PaymentRegister from './PaymentRegister.vue';
import { useForm } from '@inertiajs/vue3';
import { Button, useToast } from 'primevue';
import { useTicketStore } from '@/store/use-ticket-store';

const toast = useToast();
const store = useTicketStore();
const { closeTicketPurchaseModal } = store;
const form = useForm({
    participants: [], 
    amount: null,     
    type_payment_id: null ,
    image: null,
});

const submitForm = () => {
    form.post('/tickets', {
        onSuccess: () => {
            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Ticket registrado exitosamente', life: 3000 });
            localStorage.removeItem('formData'); // Limpiar datos después del envío
            form.reset();
            closeTicketPurchaseModal();
        },
        onError: () => {
            // First error
            const error = Object.values(form.errors)[0];
            toast.add({ severity: 'error', summary: 'Error', detail: error ?? 'Error al registrar ticket', life: 3000 });
        },
    });
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Campistas</Tab>
                <Tab value="1">Pago</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <ParticipantRegister :form="form" />  
                </TabPanel>
                <TabPanel value="1">
                    <PaymentRegister :form="form" />
                </TabPanel>
            </TabPanels>
        </Tabs>   
        <div class="flex justify-between gap-1 w-full md:px-5 mt-5">
            <Button label="Cancelar" size="small" class="p-button-danger w-1/2 md:w-1/4 xl:w-1/5" @click="closeTicketPurchaseModal" />
            <Button type="submit" size="small" label="Registrar" class="w-1/2 md:w-1/4 xl:w-1/5"/>
        </div>
    </form>
</template>