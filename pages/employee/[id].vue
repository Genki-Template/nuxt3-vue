<template>
  <div>
    <div>{{ id }}</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const route = useRoute();
const id = route.params.id;
</script>

<style lang="scss" scoped></style>
