<script setup>
import InputError from '@/Components/InputError.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { useTicketStore } from '@/store/use-ticket-store';
import { storeToRefs } from 'pinia';
import { Button, FloatLabel, Select, useToast } from 'primevue';
import { useForm, usePage } from '@inertiajs/vue3';

const store = useTicketStore();
const { closeParticipantRegistrationModal } = store;
const { isOpenParticipantRegistrationModal } = storeToRefs(store);

const form = useForm({
    ci: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    church_id: '',
});
const { churches } = usePage().props;
const toast = useToast();

const submit = () => {
    form.post(route('admin.participants.store'), {
        onFinish: () => {
        },
        onSuccess: () => {
            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Participante registrado correctamente', life: 3000 });
            form.reset();
            closeParticipantRegistrationModal();
        },
        onError: () => {
            // First error
            const error = Object.values(form.errors)[0];
            toast.add({ severity: 'error', summary: 'Error', detail: error ?? 'Error al registrar participante', life: 3000 });
        },
    });
};
</script>

<template>
    <Dialog 
        v-model:visible="isOpenParticipantRegistrationModal" 
        modal 
        class="w-11/12 sm:w-10/12 md:w-8/12 xl:w-6/12"
        >
            <template #header>
                <h3 class="text-xl font-bold">Registrando participante</h3>
            </template>
            <form @submit.prevent="submit">
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">Datos</Tab>
                        <Tab value="1">Contacto</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                            <h4 class="text-base font-medium">Datos personales</h4>   

                            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
                                <div>
                                    <FloatLabel variant="on">
                                        <label for="ci">Carnet de identidad</label>  
                                        <InputText 
                                            id="ci" 
                                            type="text" 
                                            size="small"
                                            v-model="form.ci"
                                            class="w-full" 
                                        />
                                    </FloatLabel>
                                    <InputError :message="form.errors.ci" />
                                </div>

                                <div>
                                    <FloatLabel variant="on">
                                        <label for="first_name">Nombre</label>  
                                        <InputText 
                                            id="first_name" 
                                            type="text"
                                            v-model="form.first_name" 
                                            class="w-full" 
                                        />
                                    </FloatLabel>
                                    <InputError :message="form.errors.first_name" />
                                </div>

                                <div>
                                    <FloatLabel variant="on">
                                        <label for="last_name">Apellido</label>  
                                        <InputText 
                                            id="last_name" 
                                            type="text" 
                                            v-model="form.last_name"
                                            class="w-full" 
                                        />
                                    </FloatLabel>  
                                    <InputError :message="form.errors.last_name" />
                                </div>

                                <div>
                                    <Select
                                        id="church_id"
                                        input-id="church_id"
                                        v-model="form.church_id" 
                                        :options="churches" 
                                        optionLabel="name" 
                                        optionValue="id"
                                        placeholder="Selecciona una iglesia" 
                                        class="w-full" 
                                    />
                                    <InputError :message="form.errors.church_id" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="1">
                            <h4 class="text-base font-medium">Contacto</h4> 

                            <div class="flex flex-col md:flex-row gap-5 mt-5">
                                <div>
                                    <FloatLabel variant="on" class="flex-1">
                                        <label for="phone">#Número</label>  
                                        <InputText 
                                            id="phone" 
                                            type="text" 
                                            v-model="form.phone"
                                            class="w-full" 
                                        />
                                    </FloatLabel>
                                    <InputError :message="form.errors.phone" />
                                </div>
        
                                <div>
                                    <FloatLabel variant="on" class="flex-1">
                                        <label for="phone">Correo</label>  
                                        <InputText 
                                            id="phone" 
                                            type="text" 
                                            v-model="form.email"
                                            class="w-full" 
                                        />
                                    </FloatLabel>
                                    <InputError :message="form.errors.email" />
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <div class="flex justify-between gap-1 w-full md:px-5">
                    <Button 
                        label="Cancelar" 
                        size="small" 
                        class="p-button-danger w-1/2 md:w-1/4 xl:w-1/5" 
                        :disabled="form.processing"
                        @click="closeParticipantRegistrationModal" 
                    />
                    <Button 
                        label="Guardar" 
                        size="small" 
                        type="submit" 
                        :loading="form.processing"
                        class="p-button-success w-1/2 md:w-1/4 xl:w-1/5" 
                    />
                </div>
            </form>
        </Dialog>
</template>