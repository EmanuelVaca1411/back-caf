<script setup>
import { locationImages } from "@/src/constant/gallery";
import { Galleria } from "primevue";
import { ref } from "vue";

const gallerySetting = ref({
    activeIndex: 0,
    visible: false,
    responsiveOptions: [
        {
            breakpoint: "1300px",
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
            breakpoint: "400px",
            numVisible: 1,
        },
    ],
});
</script>

<template>
    <section
        id="location"
        class="text-white bg-gray-800 py-10 min-h-screen flex flex-col justify-center items-center overflow-x-hidden"
    >
        <h2 class="text-center font-extrabold text-2xl sm:text-4xl">
            Lugar del campamento
        </h2>
        <div class="flex flex-col gap-2 text-slate-500 text-lg sm:text-xl my-5">
            <p class="text-center font-semibold">
                1 - 4 de Marzo, 2025
                <i class="pi pi-clock"></i>
            </p>
            <p class="text-center font-semibold">
                Cotoca, Santa Cruz - Bolivia
                <i class="pi pi-map-marker mt-2" style="font-size: 2rem"></i>
            </p>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 bg-slate-300 p-2 my-2 rounded-2xl"
        >
            <div class="flex flex-row justify-center items-center">
                <div class="">
                    <h3
                        class="text-center font-extrabold underline text-2xl sm:text-3xl text-slate-900"
                    >
                        Alista tus maletas
                    </h3>
                    <div
                        class="text-slate-800 max-w-screen-md flex flex-col gap-5 text-lg p-2 sm:p-10 rounded-lg"
                    >
                        <p>
                            Imagina un lugar donde los devocionales y predicas
                            inspiradoras transformarán tu corazón, donde el
                            compañerismo fortalecerá los lazos con nuevos
                            hermanos, y los juegos y actividades crearán
                            recuerdos que perdurarán para siempre.
                        </p>
                        <p>
                            En el <strong class="font-extrabold">CAF</strong>,
                            cada momento está diseñado para nutrir tu espíritu,
                            fomentar nuevas amistades y cultivar un sentido de
                            compañerismo.
                        </p>
                        <p>
                            ¿Estás listo para vivir 3 días de bendición y
                            diversión en nuestro Campamento
                            <strong>CAF 2025?</strong>
                            <span class="block">
                                ¡Te esperamos con los brazos abiertos!
                            </span>
                        </p>
                        <div
                            class="flex flex-col gap-3 text-slate-600 text-lg mt-5"
                        >
                            <p class="text-center font-semibold">
                                1 - 4 de Marzo, 2025
                                <i class="pi pi-clock"></i>
                            </p>
                            <p class="text-center font-semibold">
                                Cotoca, Santa Cruz - Bolivia
                            </p>
                            <div class="">
                                <a
                                    href="https://www.google.com/maps?q=-17.75814393864235,-63.0112437"
                                    class="hover:text-slate-700 block text-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        class="pi pi-map-marker text-5xl"
                                        style="font-size: 5rem"
                                    ></i>
                                </a>
                                <p class="text-sm font-semibold text-center">
                                    Click para abrir ubicación
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-auto flex flex-col items-center justify-center">
                <div class="card">
                    <Galleria
                        v-model:activeIndex="gallerySetting.activeIndex"
                        :value="locationImages"
                        :responsiveOptions="gallerySetting.responsiveOptions"
                        :numVisible="6"
                        :circular="true"
                        :autoPlay="true"
                    >
                        <template #item="slotProps">
                            <img
                                :src="slotProps.item.src"
                                :alt="slotProps.item.alt"
                                class="w-full h-[25rem] sm:h-[40rem] object-cover"
                            />
                        </template>
                        <template #thumbnail="slotProps">
                            <img
                                :src="slotProps.item.src"
                                :alt="slotProps.item.alt"
                                class="w-full h-36 sm:h-52"
                            />
                        </template>
                    </Galleria>
                </div>
            </div>
        </div>
    </section>
</template>
