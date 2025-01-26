<script setup>
import { computed, ref } from "vue";
import InputError from "@/Components/InputError.vue";
import { usePaymentStore } from "@/store/usePaymentStore";
import { useForm, usePage } from "@inertiajs/vue3";
import { storeToRefs } from "pinia";
import { Button, Dialog, Select, InputNumber, useToast, FileUpload, Image} from "primevue";

const storeModal = usePaymentStore();
const { closePaymentModal } = storeModal;
const { isOpenPaymentModal } = storeToRefs(storeModal);
const toast = useToast();
const page = usePage();

const src = ref(null);
const typePayments = computed(() => page.props?.type_payments);
const ticketPurchase = computed(() => page.props?.ticket_purchase);

const form = useForm({
    amount: 0,
    type_payment_id: null,
    ticket_purchase_id: ticketPurchase.value.id,
    image: null,
});

function onFileSelect(event) {
    const file = event.files[0];
    form.image = file;
    const reader = new FileReader();

    reader.onload = async (e) => {
        src.value = e.target.result;
    };

    reader.readAsDataURL(file);
}

const submit = () => {
    form.post(route('admin.ticket-payments.store'), {
        onFinish: () => {
        },
        onSuccess: () => {
            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Pago registrado exitosamente', life: 3000 });
            form.reset();
            closePaymentModal();
        },
        onError: () => {
            // First error
            const error = Object.values(form.errors)[0];
            toast.add({ severity: 'error', summary: 'Error', detail: error ?? 'Error al registrar pago', life: 3000 });
        },
    });
};
</script>

<template>
    <Dialog
        v-model:visible="isOpenPaymentModal"
        modal
        class="w-full sm:w-4/5 md:w-3/5 lg:w-2/5"
    >
        <template #header>
            <h3 class="text-xl font-bold">Registrando pago</h3>
        </template>

        <form @submit.prevent="submit">
            <div class="bg-gray-100 p-4 rounded-md shadow-sm mb-4">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                    <div>
                        <span class="text-gray-600 text-sm font-medium block">Total:</span>
                        <span class="text-gray-800 text-xl font-bold">{{ ticketPurchase.total }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 text-sm font-medium block">Monto Cancelado:</span>
                        <span class="text-green-600 text-xl font-bold">{{ ticketPurchase.paid_amount }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600 text-sm font-medium block">Monto Pendiente:</span>
                        <span class="text-red-600 text-xl font-bold">{{ ticketPurchase.remaining_amount }}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-row flex-wrap items-start sm:items-center gap-2 my-5">
                <div class="flex flex-col gap-2 w-full"> 
                    <label class="text-base font-medium" for="amount">Monto</label>
                    <InputNumber
                        v-model="form.amount"
                        placeholder="Ingrese un monto"
                        :min="0"
                        :max="ticketPurchase.remaining_amount"
                        class="w-full"
                        mode="decimal"
                    />
                    <InputError :message="form.errors.amount" />
                </div>

                <div class="flex flex-col gap-2 w-full">
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

            <!-- <div v-if="form.type_payment_id === 2" class="flex flex-col justify-center items-center">
                <label for="" class="font-semibold text-center">Escanea el QR</label>
                <Image src="/QR.jpg" alt="Image" preview  width="250" />
            </div> -->

            <div v-if="form.type_payment_id === 2" class="flex flex-col items-center gap-2">
                <label class="text-base font-medium" for="reference">Subir comprobante</label>
                <div class="card flex flex-col items-center gap-6">
                    <FileUpload mode="basic" @select="onFileSelect" customUpload auto severity="secondary"  class="p-button-outlined" accept="image/*" />
                    <img v-if="src" :src="src" alt="Image" class="shadow-md rounded-xl w-52 h-52" style="filter: grayscale(100%)" />
                </div>
            </div>

            <div class="flex justify-between gap-5 w-full md:px-5">
                <Button label="Cancelar" size="small" class="p-button-danger w-1/2 md:w-1/4 xl:w-1/5" @click="closePaymentModal" />
                <Button label="Guardar" size="small" type="submit" class="p-button-success w-1/2 md:w-1/4 xl:w-1/5" />
            </div>
        </form>
    </Dialog>
</template>
