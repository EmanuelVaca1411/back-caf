<script setup>
import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
} from "primevue";
</script>

<template>
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
</template>
