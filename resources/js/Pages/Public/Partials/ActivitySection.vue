<script setup>
import { activityImages, talentoImages } from "@/src/constant/gallery";
import { Galleria } from "primevue";
import { ref } from "vue";

const galleries = ref({
    dinamy: {
        activeIndex: 0,
        visible: false,
        responsiveOptions: [
            {
                breakpoint: "1500px",
                numVisible: 5,
            },
            {
                breakpoint: "1024px",
                numVisible: 3,
            },
            {
                breakpoint: "768px",
                numVisible: 2,
            },
            {
                breakpoint: "560px",
                numVisible: 1,
            },
        ],
    },
    talent: {
        activeIndex: 0,
        visible: false,
        responsiveOptions: [
            {
                breakpoint: "1500px",
                numVisible: 5,
            },
            {
                breakpoint: "1024px",
                numVisible: 3,
            },
            {
                breakpoint: "768px",
                numVisible: 2,
            },
            {
                breakpoint: "560px",
                numVisible: 1,
            },
        ],
    },
});
</script>

<template>
    <section id="activity" class="py-10 rounded-2xl overflow-x-hidden">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-10 md:px-10">
            <section
                class="md:col-span-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative"
            >
                <div
                    class="absolute -top-8 -left-8 w-16 h-16 bg-gray-600/30 rounded-full blur-3xl"
                ></div>
                <h4 class="text-2xl font-bold mb-6 text-gray-200">
                    Actividades recreacionales
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="relative md:col-span-2 overflow-hidden">
                        <Galleria
                            v-model:activeIndex="galleries.dinamy.activeIndex"
                            :responsiveOptions="
                                galleries.dinamy.responsiveOptions
                            "
                            :value="activityImages"
                            :circular="true"
                            :showThumbnails="false"
                            :autoPlay="true"
                            :showItemNavigators="true"
                            class="rounded-lg shadow-md"
                        >
                            <template #item="slotProps">
                                <img
                                    :src="slotProps.item.src"
                                    :alt="slotProps.item.alt"
                                    class="w-full h-96 object-cover"
                                />
                            </template>
                        </Galleria>
                    </div>
                    <!-- Descripción breve -->
                    <div class="space-y-4">
                        <p
                            class="text-lg font-semibold text-gray-300 text-center"
                        >
                            Vive momentos únicos que combinan diversión y
                            trabajo en equipo.
                        </p>
                        <ul
                            class="list-disc list-inside text-gray-300 space-y-2 text-sm"
                        >
                            <li>
                                <strong>Circuitos:</strong> Desafíos llenos de
                                emoción para escuadrones.
                            </li>
                            <li>
                                <strong>Noche de Fogata:</strong> Reflexión y
                                cantos bajo las estrellas.
                            </li>
                            <li>
                                <strong>Competencias:</strong> Actividades
                                llenas de creatividad y energía.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Noche de talentos -->
            <section
                class="md:col-span-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative"
            >
                <div
                    class="absolute -top-8 -right-8 w-16 h-16 bg-gray-600/30 rounded-full blur-3xl"
                ></div>
                <h4 class="text-2xl font-bold text-center mb-6 text-gray-200">
                    Especiales
                </h4>
                <div class="relative overflow-hidden">
                    <Galleria
                        v-model:activeIndex="galleries.talent.activeIndex"
                        :value="talentoImages"
                        :circular="true"
                        :showThumbnails="false"
                        :autoPlay="true"
                        :showItemNavigators="true"
                        class="rounded-lg shadow-md"
                    >
                        <template #item="slotProps">
                            <img
                                :src="slotProps.item.src"
                                :alt="slotProps.item.alt"
                                class="w-full h-96 object-cover"
                            />
                        </template>
                    </Galleria>
                </div>
            </section>
        </div>
    </section>
</template>
