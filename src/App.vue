<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-wrapper">
    <RouterView />
    <ModalsContainer />
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.app-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgb(236, 236, 236);
}
</style>
