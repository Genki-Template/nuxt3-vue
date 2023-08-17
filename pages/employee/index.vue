<template>
  <div>
    <Loading v-show="state.isLoading" />
    <div>{{ employee }}</div>
    <div>{{ $dayjs() }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Employee } from "@/api/Employees";

definePageMeta({
  layout: "default",
});

const { $dayjs } = useNuxtApp();
const { state, fetchEmplyees } = useEmployee();
const employee = ref([] as Employee[]);

onMounted(async () => {
  employee.value = (await fetchEmplyees()) as Employee[];
});
</script>

<style lang="scss" scoped></style>
