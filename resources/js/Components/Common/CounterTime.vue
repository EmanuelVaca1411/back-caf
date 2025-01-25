<script setup>
import Countdown from '@chenfengyuan/vue-countdown';

// Define la fecha objetivo
const targetDate = new Date('2025-03-01T00:00:00'); 
const now = new Date();
const timeDifference = targetDate.getTime() - now.getTime(); // Diferencia en milisegundos

const countdownTime = timeDifference > 0 ? timeDifference : 0;

// Manejar el final del contador
const handleCountdownEnd = () => {
  alert('¡El tiempo ha terminado!');
};
</script>

<template>
  <div class="text-center">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Solo falta:</h2>
    <Countdown
      :time="countdownTime"
      @countdownend="handleCountdownEnd"
      class="flex justify-center flex-wrap space-x-4"
    >
      <template #default="{ days, hours, minutes, seconds }">
        <div>
          <span>{{ days }}</span>
          <span class="block text-sm">DÍAS</span>
        </div>
        <span>:</span>
        <div>
          <span>{{ hours }}</span>
          <span class="block text-sm">HORAS</span>
        </div>
        <span>:</span>
        <div>
          <span>{{ minutes }}</span>
          <span class="block text-sm">MIN</span>
        </div>
        <span>:</span>
        <div>
          <span>{{ seconds }}</span>
          <span class="block text-sm">SEG</span>
        </div>
      </template>
    </Countdown>
  </div>
</template>
