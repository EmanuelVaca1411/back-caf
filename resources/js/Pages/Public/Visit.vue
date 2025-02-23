<script setup>
defineProps({
    visit: Number,
});
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <h1 class="text-6xl font-bold">Visitas: {{ visit?.count }}</h1>
    </div>
</template>
