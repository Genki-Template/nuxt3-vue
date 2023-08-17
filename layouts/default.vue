<template>
  <div>
    <navigation-drawer />
    <slot />
  </div>
</template>

<style lang="scss">
.v-spinner {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  background-color: rgba(2, 0, 0, 0.075);

  .v-clip {
    border-color: rgb(0, 0, 0) rgb(0, 0, 0) transparent !important;
  }
}
</style>
