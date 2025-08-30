<script setup>
import { onMounted } from "vue";
import CounterTime from "@/Components/Common/CounterTime.vue";
import MainLogo from "@/Components/MainLogo.vue";
import "atropos/css";

onMounted(() => {
    import("atropos").then(({ default: Atropos }) => {
        new Atropos();
    });
});
</script>

<template>
    <div class="bg-logo-bg">
        <div id="main" class="font-body pt-20 sm:pt-5">
            <main
                class="flex flex-col items-center justify-center gap-5 text-white sm:min-h-screen pb-5"
            >
                <div
                    class="flex flex-col sm:flex-row justify-center items-center gap-2"
                >
                    <h1
                        class="font-extralight text-3xl sm:text-5xl md:text-7xl uppercase mb-6 text-center"
                    >
                        Campamento
                        <strong class="block mt-2 font-extrabold"
                            >CAF 2025</strong
                        >
                    </h1>

                    <MainLogo />
                </div>

                <div
                    class="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 text-center text-lg text-gray-300 sm:text-2xl tracking-wider"
                >
                    <div class="my-auto">
                        <p>
                            <strong class="font-bold"
                                >Retiro de carnaval</strong
                            >
                        </p>
                    </div>
                    <div class="my-auto">
                        <p>
                            <strong class="font-extrabold"
                                >1 - 4 de Marzo</strong
                            >
                        </p>
                        <p>Cotoca - Santa Cruz</p>
                    </div>
                    <div>
                        <p>Inscripción</p>
                        <p>
                            <strong class="font-extrabold">300 Bs</strong>
                        </p>
                    </div>
                </div>

                <div class="mt-2 sm:mt-5 text-gray-300">
                    <CounterTime
                        class="text-2xl sm:text-4xl md:text-6xl font-extrabold"
                    />
                </div>
            </main>
        </div>
    </div>
</template>
