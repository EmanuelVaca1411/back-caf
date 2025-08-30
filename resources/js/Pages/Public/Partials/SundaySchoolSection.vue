<script setup>
import { dominicalImages } from "@/src/constant/gallery";
import { Galleria } from "primevue";
import { ref } from "vue";

const gallerySetting = ref({
    activeIndex: 0,
    visible: false,
    responsiveOptions: [
        {
            breakpoint: "1500px",
            numVisible: 4,
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
});
</script>

<template>
    <section
        class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg py-2 sm:py-0 my-10 relative overflow-x-hidden"
    >
        <!-- <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div> -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <!-- Texto descriptivo -->
            <div class="space-y-4 px-5">
                <h4
                    class="text-3xl font-extrabold text-gray-100 text-center md:text-left"
                >
                    Escuela Dominical
                </h4>
                <p class="text-lg text-gray-400 leading-relaxed">
                    Los niños disfrutan de un tiempo especial en la
                    <strong>Escuela Dominical</strong>, donde aprenden valores
                    cristianos a través de actividades dinámicas, historias
                    bíblicas y canciones. Bajo la guía de maestras dedicadas,
                    los pequeños pueden descubrir el amor de Dios de una manera
                    creativa y divertida.
                </p>
                <ul class="list-disc list-inside text-gray-400 space-y-2">
                    <li>
                        <strong>Historias Bíblicas:</strong> Con lecciones
                        impactantes y fáciles de entender.
                    </li>
                    <li>
                        <strong>Juegos Educativos:</strong> Actividades
                        diseñadas para reforzar valores cristianos.
                    </li>
                    <li>
                        <strong>Maestras Expertas:</strong> Liderazgo amoroso y
                        dedicado para cada niño.
                    </li>
                </ul>
            </div>

            <div class="relative overflow-hidden rounded-xl shadow-lg">
                <Galleria
                    v-model:activeIndex="gallerySetting.activeIndex"
                    :value="dominicalImages"
                    :circular="true"
                    :showThumbnails="false"
                    :showItemNavigators="true"
                    :autoPlay="true"
                    class="rounded-lg border border-gray-600"
                >
                    <template #item="slotProps">
                        <img
                            :src="slotProps.item.src"
                            :alt="slotProps.item.alt"
                            class="w-full h-[30rem] object-cover"
                        />
                    </template>
                </Galleria>
            </div>
        </div>
    </section>
</template>
