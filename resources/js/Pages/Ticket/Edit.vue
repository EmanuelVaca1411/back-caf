<script setup>
import PaymentModal from './Partial/PaymentModal.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { usePaymentStore } from "@/store/usePaymentStore"
import { usePage } from '@inertiajs/vue3';
import { Button, Column, DataTable, InputNumber } from 'primevue';
import { computed } from 'vue';

const props = defineProps({
    ticket_purchase: Object,
})

const page = usePage();
const ticket_purchase = computed(() => page.props.ticket_purchase);
const ticket_participants = computed(() => ticket_purchase.value.ticket_participants);
const payments = computed(() => ticket_purchase.value.payments);

const { openPaymentModal } = usePaymentStore();
</script>

<template>
    <AuthenticatedLayout>
        <div class="w-10/12 mx-auto my-5">
            <h1 class="text-2xl font-bold">Editando Boleto</h1>
        </div>

        <section class="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
            <div class="bg-white shadow-md rounded-lg p-5 text-center">
                <h3 class="text-sm font-semibold text-gray-600">Cantidad de entradas</h3>
                <p class="text-2xl font-bold text-gray-800">{{ ticket_purchase.amount }}</p>
            </div>

            <div class="bg-white shadow-md rounded-lg p-5 text-center">
                <h3 class="text-sm font-semibold text-gray-600">Total</h3>
                <p class="text-2xl font-bold text-gray-800">{{ ticket_purchase.total }}</p>
            </div>

            <div class="bg-white shadow-md rounded-lg p-5 text-center">
                <h3 class="text-sm font-semibold text-gray-600">Monto cancelado</h3>
                <p class="text-2xl font-bold text-green-600">{{ ticket_purchase.paid_amount }}</p>
            </div>

            <div class="bg-white shadow-md rounded-lg p-5 text-center">
                <h3 class="text-sm font-semibold text-gray-600">Monto pendiente</h3>
                <p class="text-2xl font-bold text-red-600">{{ ticket_purchase.remaining_amount }}</p>
            </div>
        </section>

        <section class="w-9/12 mx-auto my-2">
            <div class="flex justify-between mb-2">
                <h3 class="text-xl font-semibold mb-2">Pagos realizados</h3>
                <Button label="Agregar pago" @click="openPaymentModal" />
            </div>

            <DataTable
                :value="payments"
                dataKey="id"
            >
                <Column field="amount" header="Monto" />
                <Column field="type_payment.name" header="Tipo de pago" />
                <Column field="created_at" header="Fecha de registro" />  
            </DataTable>
        </section>

        <!-- Participants -->
        <section class="w-9/12 mx-auto my-5">
            <h3 class="text-xl font-semibold mb-2">Participantes</h3>
            <DataTable
                :value="ticket_participants"
                dataKey="ci"
            >
                <Column field="participant.ci" header="#Carnet" />
                <Column field="participant.first_name" header="Nombre" />
                <Column field="participant.last_name" header="Apellido" />
                <Column field="participant.church.name"  header="Iglesia" >
                    <template #body="{ data }">
                        <p>{{ data.participant?.church?.name ?? "Iglesia no registrada" }}</p>
                    </template>
                </Column>
                <Column field="participant.phone"  header="Télefono" >
                    <template #body="{ data }">
                        <p>{{ data.participant?.phone ?? "Sin número" }}</p>
                    </template>
                </Column>
                <Column field="participant.phone"  header="Correo" >
                    <template #body="{ data }">
                        <p>{{ data.participant?.phone ?? "Sin número" }}</p>
                    </template>
                </Column>
            </DataTable>
        </section>

        <PaymentModal />
    </AuthenticatedLayout>
</template>