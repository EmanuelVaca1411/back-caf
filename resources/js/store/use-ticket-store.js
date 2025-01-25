import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', () => {
    const isOpenTicketModal = ref(false);
    const isOpenTicketPurchaseModal = ref(false);
    const isOpenParticipantRegistrationModal = ref(false);

    const openTicketModal = () => {
        isOpenTicketModal.value = true;
    }

    const closeTicketModal = () => {
        isOpenTicketModal.value = false;
    }

    const openTicketPurchaseModal = () => {
        console.log('openTicketPurchaseModal called');
        isOpenTicketPurchaseModal.value = true;
    }

    const closeTicketPurchaseModal = () => {
        isOpenTicketPurchaseModal.value = false;
    }

    const openParticipantRegistrationModal = () => {
        console.log('openParticipantRegistrationModal called');
        isOpenParticipantRegistrationModal.value = true;
    }

    const closeParticipantRegistrationModal = () => {
        isOpenParticipantRegistrationModal.value = false;
    }

    return {
        isOpenTicketModal,
        isOpenTicketPurchaseModal,
        isOpenParticipantRegistrationModal,
        openTicketModal,
        closeTicketModal,
        openTicketPurchaseModal,
        closeTicketPurchaseModal,
        openParticipantRegistrationModal,
        closeParticipantRegistrationModal,
    }
},{
    persist: {
        storage: window.localStorage,
    },
});
