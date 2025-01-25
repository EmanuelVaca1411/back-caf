<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { useRegisterParticipantStore } from '@/Store/useRegisterParticipantStore';
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'primevue';

const { 
    participants,
    addParticipant,
    removeParticipant,
} = useRegisterParticipantStore();
</script>

<template>
    <PublicLayout :includeHeader="false">
      <main class="min-h-screen text-white grid grid-cols-1 md:grid-cols-3">
        <div class="hidden md:flex items-center justify-center md:col-span-1 layout">
            <div class="hidden sm:layout"></div>
            <img
                src="/images/logo_caf.png"
                alt="Logo"
                class="w-32 h-32 md:w-64 md:h-64 object-cover rounded-full shadow-md"
            />
        </div>
  
        <!-- Columna Derecha: Contenido -->
        <div class="p-8 md:col-span-2 bg-zinc-800">
            <!-- <div class="flex items-center justify-center sm:hidden">
                <img
                    src="/images/logo_caf.png"
                    alt="Logo"
                    class="w-32 h-32 md:w-64 md:h-64 object-cover rounded-full shadow-md"
                />
            </div> -->

            <h2>Registrate</h2>

            <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
        </div>
      </main>
    </PublicLayout>
  </template>
  
