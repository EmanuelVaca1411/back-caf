<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isMenuOpen = ref(false);
const isNavbarVisible = ref(true); 
const lastScrollY = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Mostrar el navbar si estás desplazándote hacia arriba
  isNavbarVisible.value = currentScrollY < lastScrollY.value || currentScrollY === 0;

  lastScrollY.value = currentScrollY;
};

const options = [
  { name: 'Actividades', href: '#activity' },
  { name: 'Lugar', href: '#location' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Preguntas', href: '#questions' },
];

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white text-xl tracking-widest',
    isNavbarVisible ? 'bg-gray-900 shadow-md translate-y-0' : '-translate-y-full'
  ]">
    <div class="flex justify-between items-center py-2 px-4 max-w-7xl mx-auto">
      <!-- Logo a la izquierda -->
      <a href="#main">
        <div class="flex items-center flex-shrink-0">
          <div class="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src="/images/logo_caf.png"
              alt="Logo"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </a>

      <div class="hidden lg:flex flex-grow justify-end space-x-8">
        <template v-for="option in options">
          <a
            :href="option.href"
            class="hover:text-orange-500 hover:font-semibold font-extralight transition duration-300"
          >
            {{ option.name }}
          </a>
        </template>
      </div>

      <!-- <div class="hidden sm:flex items-center flex-shrink-0">
        <Link
           :href="route('admin.tickets.create')"
          class="text-orange-500 text-sm sm:text-lg font-bold underline decoration-orange-600 decoration-[2px] underline-offset-4 hover:text-orange-400 hover:decoration-orange-500 transition duration-300 tracking-widest"
        >
          Inscripciones
        </Link>
      </div> -->

      <button
        @click="toggleMenu"
        class="lg:hidden flex items-center justify-center w-8 h-8 hover:bg-gray-700 rounded focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-if="isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      v-show="isMenuOpen"
      class="lg:hidden flex flex-col items-center space-y-2 py-2 bg-gray-800"
    >
      <template v-for="option in options">
        <a
          :href="option.href"
          class="hover:text-orange-500 text-lg font-semibold transition duration-300"
        >
          {{ option.name }}
        </a>
      </template>
    </div>
  </nav>
</template>
