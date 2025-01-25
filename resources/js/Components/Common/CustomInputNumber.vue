<script setup>
import { InputNumber, Select } from "primevue";
import { ref, computed } from "vue";

const props = defineProps({
    modelValue: Number, 
    min: { type: Number, default: 0 }, 
    max: { type: Number, default: Infinity }, 
    options: { type: Array, default: () => [50, 100, 150, 200] }, 
    placeholder: { type: String, default: "Ingrese un monto" }, 
});

const emit = defineEmits(["update:modelValue"]);

const localValue = ref(props.modelValue); 
const selectedOption = ref(null); 

const validOptions = computed(() =>
props.options.filter((option) => option <= props.max)
);

const updateValue = (value) => {
    if (value > props.max) {
        localValue.value = props.max;
    } else {
        localValue.value = value;
    }
    emit("update:modelValue", localValue.value);
};

const selectOption = ({ value }) => {
    console.log(value);
    if (!isNaN(value)) {
        localValue.value = value;
        emit("update:modelValue", value);
    }
};
</script>

<template>
    <div class="flex items-center border rounded-md shadow-sm">
        <InputNumber
            v-model="localValue"
            :min="min"
            :max="max"
            :placeholder="placeholder"
            class="flex-grow"
            mode="decimal"
            @input="updateValue"
        />
  
        <Select
            :options="validOptions"
            class="text-gray-600 border-l border-gray-300"
            @change="selectOption"
        />
    </div>
</template>