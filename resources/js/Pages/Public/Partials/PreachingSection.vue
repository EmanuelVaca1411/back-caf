<script setup>
import { predicaImages } from "@/src/constant/gallery";
import { Galleria } from "primevue";
import { ref } from "vue";

const gallerySetting = ref({
    images: predicaImages,
    activeIndex: 0,
    visible: false,
    responsiveOptions: [
        {
            breakpoint: "1400px",
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
        class="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mx-auto mb-10 content-center items-center mt-5"
    >
        <div class="flex flex-col justify-center space-y-5">
            <h3 class="text-center text-3xl sm:text-4xl font-bold text-white">
                Ven a escuchar la palabra del Señor
            </h3>
            <p class="text-lg text-gray-300 leading-relaxed">
                Durante el campamento, tendremos tiempo de
                <strong>alabanzas</strong> y <strong>adoración</strong>, donde
                la música y el gozo llenerán el ambiente, conectándote con Dios
                a través de las alabanzas y la ministración. También podrás ser
                parte de poderosas palabras que transformaran tu vida, a través
                de Pastores y Siervos dedicados a compartir mensajes llenos de
                sabiduría y amor.
            </p>
            <ul class="list-disc list-inside text-gray-300">
                <li>Tiempo de alabanzas y adoración.</li>
                <li>Predicas poderosas que fortalecerán tu fe.</li>
                <li>
                    Un tiempo de conexión con Dios para reflexionar y crecer
                    espiritualmente.
                </li>
                <li>
                    Oportunidad de formar y crear lazos con nuevos hermanos en
                    Cristo.
                </li>
            </ul>
        </div>

        <div
            class="relative rounded-lg overflow-hidden shadow-lg w-full xl:w-2/3 mx-auto"
        >
            <Galleria
                v-model:activeIndex="gallerySetting.activeIndex"
                v-model:visible="gallerySetting.visible"
                :responsiveOptions="gallerySetting.responsiveOptions"
                :value="predicaImages"
                :autoPlay="true"
                :circular="true"
                :showThumbnails="false"
                :showItemNavigators="true"
                class="rounded-lg"
                containerStyle="max-width: 50rem"
            >
                <template #item="slotProps">
                    <img
                        :src="slotProps.item.src"
                        :alt="slotProps.item.alt"
                        class="w-full h-[30rem] sm:h-[40rem] object-cover"
                    />
                </template>
            </Galleria>
        </div>
    </section>
</template>
