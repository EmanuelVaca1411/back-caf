<script setup>
import { computed, ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { DataTable, Column, Button, Badge } from 'primevue';

const pages = usePage();
const ticketPurchase = computed(() => pages.props?.ticket_purchases ?? []);
const expandedRows = ref({});

const onRowExpand = (event) => {
  console.log("Fila expandida:", event.data);
};
const onRowCollapse = (event) => {
  console.log("Fila colapsada:", event.data);
};
const expandAll = () => {
    expandedRows.value = ticketPurchase.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};
const collapseAll = () => {
    expandedRows.value = null;
};
const getStatusClass = (data) => {
    const { name } = data.status;

  switch (name) {
    case "Pendiente":
      return "info";
    case "Completado":
      return "success";
    case "Cancelado":
      return "danger";
    default:
      return "warn";
  }
};
const editRow = (id) => {

};
</script>

<template>
    <DataTable 
        v-model:expandedRows="expandedRows" 
        :value="ticketPurchase" 
        dataKey="id" 
        @rowExpand="onRowExpand" 
        @rowCollapse="onRowCollapse"
        tableStyle="min-width: 50rem"
    >
        <template #header>
            <div class="flex justify-between">
                <h2 class="text-xl font-bold">Entradas</h2>
                <div class="flex flex-wrap justify-end gap-2">
                    <Button text icon="pi pi-plus" label="Mostrar todo" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Ocultar todo" @click="collapseAll" />
                </div>
            </div>
        </template>
        <Column expander style="width: 5rem" />
        <Column field="ticket.name" header="Ticket" />
        <Column field="amount" header="Cantidad de entradas" />
        <Column field="total" header="Total" />
        <Column field="paid_amount" header="Monto cancelado" />
        <Column field="remaining_amount" header="Monto a pagar" />
        <Column field="created_at" header="Fecha de compra" />
        <Column field="status.name" header="Estado">
            <template #body="{ data }">
                <Badge :value="data.status.name" :severity="getStatusClass(data)" />
            </template>
        </Column>
        <Column header="Acciones" style="width: 8rem">
            <template #body="{ data }">
                <Link :href="`/admin/tickets/edit/${data.id}`">
                    Editar
                </Link>
            </template>
        </Column>

        <template #expansion="{ data }">
            <div>
                <h3>Campistas</h3>
                <DataTable 
                    :value="data.ticket_participants"
                    dataKey="ci"
                >
                    <Column field="participant.ci" header="#Carnet" />
                    <Column field="participant.first_name" header="Nombre" />
                    <Column field="participant.last_name" header="Apellido" />
                </DataTable>
            </div>
        </template>
    </DataTable>
</template>