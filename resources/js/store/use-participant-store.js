import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useParticipantStore = defineStore('participant', () => {
    const selectedParticipants = ref([]);

    const addParticipant = (participant) => {
        const participantExists = selectedParticipants.value.find(p => p.id === participant.id);
        if (participantExists) return;
        selectedParticipants.value.push(participant);
    };

    const removeParticipant = (participantId) => {
        selectedParticipants.value = selectedParticipants.value.filter(p => p.id !== participantId);
    };

    return {
        selectedParticipants,
        addParticipant,
        removeParticipant
    };
}, {
    persist: {
        storage: window.localStorage, 
    },
});
