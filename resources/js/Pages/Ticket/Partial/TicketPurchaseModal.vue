<script setup>
import TicketPurchaseTabs from './TicketPurchaseTabs.vue';
import { useTicketStore } from '@/store/use-ticket-store';
import { storeToRefs } from 'pinia';
import Dialog from 'primevue/dialog';

const store = useTicketStore();
const { closeTicketPurchaseModal } = store;
const { isOpenTicketPurchaseModal } = storeToRefs(store);
</script>

<template>
    <Dialog v-model:visible="isOpenTicketPurchaseModal" modal class="w-full sm:w-11/12 md:w-9/12" >
        <template #header>
            <h3 class="text-xl font-bold">Comprando ticket</h3>
        </template>
        
        <TicketPurchaseTabs />
    </Dialog>
</template>