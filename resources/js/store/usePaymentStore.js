import { ref } from "vue";
import { defineStore } from "pinia";

export const usePaymentStore = defineStore('payment', () => {
    const isOpenPaymentModal = ref(false);

    const openPaymentModal = () => {
        console.log('Open payment');
        isOpenPaymentModal.value = true;
    }

    const closePaymentModal = () => {
        isOpenPaymentModal.value = false;
    }

    return {
        isOpenPaymentModal,
        openPaymentModal,
        closePaymentModal
    }
});