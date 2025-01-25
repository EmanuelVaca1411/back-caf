<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Atropos from 'atropos';
import 'atropos/css'

// Referencia al contenedor de Atropos
const atroposInstance = ref(null);
const atroposRef = ref(null);

onMounted(async () => {

  // Inicializa Atropos
  atroposInstance.value = Atropos({
      el: '.my-atropos', // Contenedor del efecto
      activeOffset: 40,
      shadowScale: 1.05,
      shadow: true, // Habilita sombras dinámicas
      highlight: true, // Efecto de resalte
      rotateXLimit: 30, // Límite de rotación en X
      rotateYLimit: 30,
      rotate: true,
  });
});

onUnmounted(() => {
  // Destruye la instancia de Atropos al desmontar el componente
  if (atroposInstance.value) {
    atroposInstance.value.destroy();
  }
});
</script>

<template>
      <div class="atropos bg-transparent w-[15rem] h-[15rem] sm:w-[22rem] sm:h-[22rem] my-atropos">
      <!-- scale container (required) -->
      <div class="atropos-scale">
      <!-- rotate container (required) -->
      <div class="atropos-rotate">
            <!-- inner container (required) -->
            <div class="atropos-inner">
                  <img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="-5" />
                  <img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="0" />
                  <img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="+5" />
            </div>
      </div>
      </div>
      </div>
</template>

<style>
.my-atropos {
  
}
</style>
