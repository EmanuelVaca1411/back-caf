<script setup>
import { reactive, ref, onMounted } from "vue";
import {
    activityImages,
    dominicalImages,
    predicaImages,
    locationImages,
    talentoImages,
    generalImages,
} from "@/src/constant/gallery";
import CounterTime from "@/Components/Common/CounterTime.vue";
import MainLogo from "@/Components/MainLogo.vue";
import Navbar from "@/Components/Common/Navbar.vue";
import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    Button,
    Galleria,
} from "primevue";
import "atropos/css"; // Importa los estilos de Atropos

// Registra el web component al montar el componente
// import("atropos").then(({ default: Atropos }) => {
//     Atropos(); // Inicializa Atropos globalmente
// });

const galleries = reactive({
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
    location: {
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
    },
    general: {
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
    },
    dominical: {
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
    },
    predica: {
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
    },
});

const openImage = (key, index) => {
    galleries[key].visible = true;
    galleries[key].activeIndex = index;
};

onMounted(() => {
    import("atropos").then(({ default: Atropos }) => {
        new Atropos(); // Solo cuando el componente está montado
    });
});
</script>

<template>
    <Navbar />
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

        <div
            class="mx-auto w-full max-w-6xl p-4 rounded-lg overflow-hidden uppercase"
        >
            <h1
                class="text-white text-3xl md:text-5xl font-bold text-center mb-6"
            >
                CRONOGRAMA DE ACTIVIDADES
            </h1>

            <div class="hidden md:block">
                <table
                    class="w-full border-collapse border border-gray-300 text-white text-sm md:text-base"
                >
                    <thead>
                        <tr class="bg-gray-800 text-white text-left">
                            <th class="border border-gray-400 px-4 py-2">
                                Día
                            </th>
                            <th class="border border-gray-400 px-4 py-2">
                                Hora
                            </th>
                            <th class="border border-gray-400 px-4 py-2">
                                Actividad
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Sábado -->
                        <tr>
                            <td
                                class="border border-gray-400 px-4 py-2 font-bold"
                                rowspan="3"
                            >
                                Sábado 01-03-2025
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                17:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Puertas abiertas del campamento
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                19:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Cena bienvenida
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                20:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicio del servicio de apertura "CAF - 2025"
                            </td>
                        </tr>

                        <!-- Domingo -->
                        <tr>
                            <td
                                class="border border-gray-400 px-4 py-2 font-bold"
                                rowspan="13"
                            >
                                Domingo 02-03-2025
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                07:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Devocional
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                07:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Aseo personal
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Desayuno
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                09:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Previas
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                10:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicia el culto
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                12:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Almuerzo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                13:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                14:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicio de actividades de campo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                16:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                17:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Aseo personal
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                19:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Cena
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                20:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicia el culto
                            </td>
                        </tr>

                        <!-- Lunes -->
                        <tr>
                            <td
                                class="border border-gray-400 px-4 py-2 font-bold"
                                rowspan="13"
                            >
                                Lunes 03-03-2025
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                07:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Devocional
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                07:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Aseo personal
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Desayuno
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                09:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Previas
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                10:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicia el culto
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                12:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Almuerzo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                13:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                14:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicio de actividades de campo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                16:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                17:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Aseo personal
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                19:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Cena
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                20:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicia el culto
                            </td>
                        </tr>

                        <!-- Martes -->
                        <tr>
                            <td
                                class="border border-gray-400 px-4 py-2 font-bold"
                                rowspan="10"
                            >
                                Martes 04-03-2025
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                07:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Devocional
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                07:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Aseo personal
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Desayuno
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                08:30 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Tiempo libre
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                09:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Previas
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                10:00 AM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicia el culto
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                12:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Almuerzo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                14:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Inicio de activiadades de campo
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                17:00 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Clausura, oración y limpieza
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-400 px-4 py-2">
                                17:30 PM
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                Congregación a sus hogares
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="md:hidden">
                <div class="text-white space-y-6">
                    <!-- Día en formato vertical con separación -->
                    <div class="border border-gray-400 p-4 rounded-lg">
                        <h2
                            class="text-lg font-bold border-b border-gray-400 pb-2 text-center"
                        >
                            Sábado 01-03-2025
                        </h2>
                        <div class="mt-2 space-y-4 text-sm">
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">17:00 PM</span>
                                <span>Puertas abiertas del campamento</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">19:30 PM</span>
                                <span>Cena bienvenida</span>
                            </div>
                            <div class="flex gap-2 justify-between">
                                <span class="font-semibold">20:30 PM</span>
                                <span
                                    >Inicio del servicio de apertura "CAF -
                                    2025"</span
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Domingo -->
                    <div class="border border-gray-400 p-4 rounded-lg">
                        <h2
                            class="text-lg font-bold border-b border-gray-400 pb-2"
                        >
                            Domingo 02-03-2025
                        </h2>
                        <div class="mt-2 space-y-4 text-sm">
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:00 AM</span>
                                <span>Devocional</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:30 AM</span>
                                <span>Aseo personal</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:00 AM</span>
                                <span>Desayuno</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:30 AM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">09:00 AM</span>
                                <span>Previas</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">10:00 AM</span>
                                <span>Inicia el culto</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">12:30 PM</span>
                                <span>Almuerzo</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">13:30 PM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">14:30 PM</span>
                                <span>Inicio de actividades de campo</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">16:00 PM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">17:00 PM</span>
                                <span>Aseo personal</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">19:00 PM</span>
                                <span>Cena</span>
                            </div>
                            <div class="flex gap-2 justify-between">
                                <span class="font-semibold">20:00 PM</span>
                                <span>Inicia el culto</span>
                            </div>
                        </div>
                    </div>

                    <!-- Lunes -->
                    <div class="border border-gray-400 p-4 rounded-lg">
                        <h2
                            class="text-lg font-bold border-b border-gray-400 pb-2"
                        >
                            Lunes 03-03-2025
                        </h2>
                        <div class="mt-2 space-y-4 text-sm">
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:00 AM</span>
                                <span>Devocional</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:30 AM</span>
                                <span>Aseo personal</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:00 AM</span>
                                <span>Desayuno</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:30 AM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">09:00 AM</span>
                                <span>Previas</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">10:00 AM</span>
                                <span>Inicia el culto</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">12:30 PM</span>
                                <span>Almuerzo</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">13:30 PM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">14:30 PM</span>
                                <span>Inicio de actividades de campo</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">16:00 PM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">17:00 PM</span>
                                <span>Aseo personal</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">19:00 PM</span>
                                <span>Cena</span>
                            </div>
                            <div class="flex gap-2 justify-between">
                                <span class="font-semibold">20:00 PM</span>
                                <span>Inicia el culto</span>
                            </div>
                        </div>
                    </div>

                    <!-- Martes -->
                    <div class="border border-gray-400 p-4 rounded-lg">
                        <h2
                            class="text-lg font-bold border-b border-gray-400 pb-2"
                        >
                            Martes 04-03-2025
                        </h2>
                        <div class="mt-2 space-y-4 text-sm">
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:00 AM</span>
                                <span>Devocional</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">07:30 AM</span>
                                <span>Aseo personal</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:00 AM</span>
                                <span>Desayuno</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">08:30 AM</span>
                                <span>Tiempo libre</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">09:00 AM</span>
                                <span>Previas</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">10:00 AM</span>
                                <span>Inicia el culto</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">12:30 PM</span>
                                <span>Inicia el culto</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">14:30 PM</span>
                                <span>Inicio de actividades de campo</span>
                            </div>
                            <div
                                class="flex gap-2 justify-between border-b border-gray-400 pb-2"
                            >
                                <span class="font-semibold">17:00 PM</span>
                                <span>Clausura, oración y limpieza</span>
                            </div>
                            <div class="flex gap-2 justify-between">
                                <span class="font-semibold">17:30 PM</span>
                                <span>Congregación a sus hogares</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section
        class="text-white bg-gray-700 py-10 min-h-screen sm:p-4 overflow-x-hidden w-full"
    >
        <section
            class="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mx-auto mb-10 content-center items-center mt-5"
        >
            <div class="flex flex-col justify-center space-y-5">
                <h3
                    class="text-center text-3xl sm:text-4xl font-bold text-white"
                >
                    Ven a escuchar la palabra del Señor
                </h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                    Durante el campamento, tendremos tiempo de
                    <strong>alabanzas</strong> y <strong>adoración</strong>,
                    donde la música y el gozo llenerán el ambiente, conectándote
                    con Dios a través de las alabanzas y la ministración.
                    También podrás ser parte de poderosas palabras que
                    transformaran tu vida, a través de Pastores y Siervos
                    dedicados a compartir mensajes llenos de sabiduría y amor.
                </p>
                <ul class="list-disc list-inside text-gray-300">
                    <li>Tiempo de alabanzas y adoración.</li>
                    <li>Predicas poderosas que fortalecerán tu fe.</li>
                    <li>
                        Un tiempo de conexión con Dios para reflexionar y crecer
                        espiritualmente.
                    </li>
                    <li>
                        Oportunidad de formar y crear lazos con nuevos hermanos
                        en Cristo.
                    </li>
                </ul>
            </div>

            <div
                class="relative rounded-lg overflow-hidden shadow-lg w-full xl:w-2/3 mx-auto"
            >
                <Galleria
                    v-model:activeIndex="galleries.predica.activeIndex"
                    v-model:visible="galleries.predica.visible"
                    :responsiveOptions="galleries.predica.responsiveOptions"
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
                        <strong>Escuela Dominical</strong>, donde aprenden
                        valores cristianos a través de actividades dinámicas,
                        historias bíblicas y canciones. Bajo la guía de maestras
                        dedicadas, los pequeños pueden descubrir el amor de Dios
                        de una manera creativa y divertida.
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
                            <strong>Maestras Expertas:</strong> Liderazgo
                            amoroso y dedicado para cada niño.
                        </li>
                    </ul>
                </div>

                <div class="relative overflow-hidden rounded-xl shadow-lg">
                    <Galleria
                        v-model:activeIndex="galleries.dominical.activeIndex"
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

        <section id="activity" class="py-10 rounded-2xl overflow-x-hidden">
            <!-- <h3 class="text-center text-3xl sm:text-4xl mb-10 font-bold text-white">Actividades</h3> -->

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
                    <div
                        class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
                    >
                        <div class="relative md:col-span-2 overflow-hidden">
                            <Galleria
                                v-model:activeIndex="
                                    galleries.dinamy.activeIndex
                                "
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
                                    <strong>Circuitos:</strong> Desafíos llenos
                                    de emoción para escuadrones.
                                </li>
                                <li>
                                    <strong>Noche de Fogata:</strong> Reflexión
                                    y cantos bajo las estrellas.
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
                    <h4
                        class="text-2xl font-bold text-center mb-6 text-gray-200"
                    >
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
    </section>

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
                        v-model:activeIndex="galleries.location.activeIndex"
                        :value="locationImages"
                        :responsiveOptions="
                            galleries.location.responsiveOptions
                        "
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

    <section
        id="gallery"
        class="min-h-screen bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 text-white py-5 flex flex-col justify-center items-center overflow-x-hidden"
    >
        <h3 class="text-center font-extrabold text-4xl mb-5">
            Momentos destacado del CAF 2024
        </h3>

        <div class="">
            <Galleria
                v-model:activeIndex="galleries.general.activeIndex"
                v-model:visible="galleries.general.visible"
                :responsiveOptions="galleries.general.responsiveOptions"
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
                        @click="openImage('general', index)"
                    />
                </div>
            </div>
        </div>
    </section>

    <section
        id="questions"
        class="py-10 flex flex-col gap-5 justify-around items-center min-h-screen overflow-x-hidden"
    >
        <div>
            <h3
                class="text-center font-semibold text-2xl sm:text-4xl mt-5 mb-2"
            >
                Recomendaciones
            </h3>
            <p class="text-lg sm:text-xl text-center mb-5">
                Descarga el siguiente PDF para ver las recomendaciones del CAF
                2025
            </p>
            <div>
                <a
                    href="/pdf/GUIA_Y_RECOMENDACIONES_CAF_2025.pdf"
                    class="block text-center mb-1"
                    download
                >
                    <i
                        class="pi pi-file-pdf hover:text-slate-500"
                        style="font-size: 4rem"
                    ></i>
                </a>
                <p class="text-center text-sm">Click para descargar</p>
            </div>
        </div>
        <div class="flex flex-col gap-5 justify-center items-center">
            <h3 class="text-center font-bold text-2xl sm:text-4xl mt-5">
                Preguntas frecuentes
            </h3>
            <div class="w-full text-xl sm:text-2xl">
                <Accordion :value="['0']" multiple>
                    <AccordionPanel value="0">
                        <AccordionHeader>
                            <h4 class="font-extrabold">
                                01 Cuál sera el precio de la inscripción?
                            </h4>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0 text-lg sm:text-lg font-semibold">
                                El precio de la inscripción sera de 300 Bs.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="1">
                        <AccordionHeader>
                            <h4 class="font-extrabold">
                                02 Está permitido el uso de celulares o
                                dispositivos electrónicos?
                            </h4>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0 text-lg sm:text-lg font-semibold">
                                Se recomienda NO usar dispositivos móviles o
                                electronicos, cualquier daño o perdida corre
                                bajo su responsabilidad.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel value="2">
                        <AccordionHeader>
                            <h4 class="font-extrabold">03 Qué debo llevar?</h4>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0 text-lg sm:text-lg font-semibold">
                                Debe traer su Biblia, Ropa cómoda y modesta
                                acorde a las diferentes actividades que se
                                realizaran (Predicas, Juegos, Banquete de la
                                Amistad, Dormir), Buena actitud, ganas de
                                aprender y divertirse.
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </div>
    </section>

    <footer
        class="bg-slate-800 text-white flex flex-col justify-center items-center overflow-x-hidden py-2"
    >
        <h5 class="mb-2">
            <span class="font-extrabold text-lg sm:text-2xl">CAF 2025</span>
        </h5>
        <div class="flex gap-5 text-center text-2xl">
            <a href="https://www.facebook.com" target="_blank">
                <i class="pi pi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <i class="pi pi-instagram"></i>
            </a>
        </div>
        <div class="p-2 flex flex-col gap-1 text-center text-sm md:text-lg">
            <p class="text-lg mb-2">Contacto <strong>STAFF</strong>:</p>
            <div class="flex flex-col sm:flex-row gap-5">
                <a href="https://wa.me/59176009801" target="_blank" class="">
                    <i class="pi pi-whatsapp" style="color: #25d366"></i>
                    Diego Gonzales - <strong>76009801</strong>
                </a>
                <a href="https://wa.me/59176009788" target="_blank">
                    <i class="pi pi-whatsapp" style="color: #25d366"></i>
                    Silvana Yabeta - <strong>76009788</strong>
                </a>
            </div>
        </div>
    </footer>
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
