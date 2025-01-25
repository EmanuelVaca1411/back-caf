import { ref } from "vue";
import { defineStore } from "pinia";

export const useRegisterParticipantStore = defineStore('registerParticipant', () => {
    const participants = ref([]);

    const addParticipant = (participant) => {
        participants.value.push(participant);
    };

    const removeParticipant = (participantId) => {
        participants.value = participants.value.filter(p => p.id !== participantId);
    };

    return {
        participants,
        addParticipant,
        removeParticipant
    };
}, {
    persist: {
        storage: window.localStorage, 
    },
});