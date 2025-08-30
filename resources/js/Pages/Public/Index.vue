<script setup>
import { onMounted } from "vue";
import "atropos/css";
import {
    ActivitySection,
    Highlights,
    Location,
    MainSection,
    PreachingSection,
    SundaySchoolSection,
    RecommendationSection,
} from "./Partials";
import PublicLayout from "@/Layouts/PublicLayout.vue";

onMounted(() => {
    import("atropos").then(({ default: Atropos }) => {
        new Atropos();
    });
});
</script>

<template>
    <PublicLayout>
        <MainSection />

        <section
            class="text-white bg-gray-700 py-10 min-h-screen sm:p-4 overflow-x-hidden w-full"
        >
            <PreachingSection />

            <SundaySchoolSection />

            <ActivitySection />
        </section>

        <Location />

        <Highlights />

        <RecommendationSection />
    </PublicLayout>
</template>

<style>
.p-galleria {
    border: none;
}
h1,
h2,
h3 {
    font-family: "League Spartan", serif;
}
</style>
