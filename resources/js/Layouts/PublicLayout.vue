<script setup>
import Navbar from "@/Components/Common/Navbar.vue";
import Footer from "@/Components/layout/footer.vue";

const props = defineProps({
    includeHeader: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <section class="layout min-h-screen">
        <Navbar v-if="includeHeader" />

        <main class="font-body">
            <slot />
        </main>

        <Footer />
    </section>
</template>
