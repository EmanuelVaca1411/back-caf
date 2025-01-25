<script setup>
import Navbar from '@/Components/Common/Navbar.vue';

const props = defineProps({
  includeHeader: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section class="layout font-body min-h-screen">
    <Navbar v-if="includeHeader" />
    
    <main class="flex flex-col items-center justify-center text-white">
      <slot />
    </main>
  </section>
</template>


