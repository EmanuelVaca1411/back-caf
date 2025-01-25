<script setup>
import { computed, ref } from 'vue';
import InputError from '@/Components/InputError.vue';
import { usePage } from '@inertiajs/vue3';
import { FileUpload, Image, InputNumber, Select } from 'primevue';

const props = defineProps({
    form: Object
});

const src = ref(null);

function onFileSelect(event) {
    const file = event.files[0];
    form.image = file;
    const reader = new FileReader();

    reader.onload = async (e) => {
        src.value = e.target.result;
    };

    reader.readAsDataURL(file);
}

const page = usePage();
const typePayments = computed(() => page.props?.type_payments);
</script>

<template>
    <div class="mb-5">
        <h3 class="text-xl font-bold">Registrar pago</h3>
    </div>

    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 my-5 w-full sm:w-1/2">
        <div class="flex flex-col gap-2 sm:w-1/2">
            <label class="text-base font-medium" for="amount">Monto</label>  
            <InputNumber 
                id="amount" 
                v-model="form.amount"
                placeholder="Monto"
                size="small"
            />
            <InputError :message="form.errors.amount" />
        </div>

        <div class="flex flex-col gap-2 sm:w-1/2">
            <label class="text-base font-medium" for="payment_method_id">Método de Pago</label>
            <Select 
                v-model="form.type_payment_id"
                inputId="payment_method_id"
                :options="typePayments"
                optionLabel="name"
                optionValue="id"
                placeholder="Selecciona un método de pago"
            />
            <InputError :message="form.errors.type_payment_id" />
        </div>
    </div>

    <div class="flex gap-2">
        <div v-if="form.type_payment_id === 2" class="flex flex-col justify-center items-center">
            <label for="" class="font-semibold text-center">Escanea el QR</label>
            <Image src="/QR.jpg" alt="Image" preview  width="250" />
        </div>
    
        <div v-if="form.type_payment_id === 2" class="flex items-center gap-2">
            <label class="text-base font-medium" for="reference">Subir comprobante</label>
            <div class="card flex flex-col items-center gap-6">
                <FileUpload mode="basic" @select="onFileSelect" customUpload auto severity="secondary" class="p-button-outlined" />
                <img v-if="src" :src="src" alt="Image" class="shadow-md rounded-xl w-52 h-52" style="filter: grayscale(100%)" />
            </div>
        </div>
    </div>
</template>