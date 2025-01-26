<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { useTicketStore } from '@/store/use-ticket-store'
import { toRefs } from 'vue';
import { Head } from "@inertiajs/vue3"
import Button from 'primevue/button';
import TicketPurchaseModal from './Partial/TicketPurchaseModal.vue';
import TicketPurchaseTable from './Partial/TicketPurchaseTable.vue';

const props = defineProps({
    churches: Object,
    participants: Object,
    type_payments: Object,
    ticket_purchases: Object,
})

const { tickets } = toRefs(props)
const { openTicketModal, openTicketPurchaseModal  } = useTicketStore();

const registerTicket = () => {
    openTicketPurchaseModal();
}   
</script>

<template>
    <AuthenticatedLayout>
        <Head title="Compra de Ticket" />

        <div class="w-10/12 flex justify-between items-center mx-auto mt-5">
            <h1 class="font-bold">Venta de tickets</h1>
            <Button label="Registrar ticket" :onclick="registerTicket" />
        </div>

        <TicketPurchaseModal />

        <div class="w-10/12 mx-auto mt-5">
            <TicketPurchaseTable />        
        </div>
    </AuthenticatedLayout>
</template>