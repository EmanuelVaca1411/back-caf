<script setup>
import { Galleria } from "primevue";
import { ref } from "vue";
import { generalImages } from "@/src/constant/gallery";

const setting = ref({
    activeIndex: 0,
    visible: false,
    responsiveOptions: [
        {
            breakpoint: "1200px",
            numVisible: 4,
        },
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "480px",
            numVisible: 2,
        },
    ],
});

const openImage = (index) => {
    setting.value.visible = true;
    setting.value.activeIndex = index;
};
</script>

<template>
    <section
        id="gallery"
        class="min-h-screen bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 text-white py-5 flex flex-col justify-center items-center overflow-x-hidden"
    >
        <h3 class="text-center font-extrabold text-4xl mb-5">
            Momentos destacado del CAF 2024
        </h3>

        <div class="">
            <Galleria
                v-model:activeIndex="setting.activeIndex"
                v-model:visible="setting.visible"
                :responsiveOptions="setting.responsiveOptions"
                :value="generalImages"
                :circular="true"
                :showThumbnails="false"
                :showItemNavigators="true"
                :showItemNavigatorsOnHover="true"
                :numVisible="9"
                :fullScreen="true"
                containerStyle="max-width: 60rem"
            >
                <template #item="slotProps">
                    <img
                        :src="slotProps.item.src"
                        :alt="slotProps.item.alt"
                        style="width: 100%; display: block"
                    />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.src" :alt="slotProps.item.alt" />
                </template>
            </Galleria>

            <div
                class="w-full grid grid-cols-12 gap-5"
                style="max-width: 100rem"
            >
                <div
                    v-for="(image, index) in generalImages"
                    :key="index"
                    class="col-span-12 sm:col-span-6 md:col-span-3 relative rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
                >
                    <img
                        :src="image.src"
                        :alt="image.alt"
                        class="w-80 h-80 object-cover cursor-pointer"
                        @click="openImage(index)"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
