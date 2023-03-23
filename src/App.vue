<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style scope>
main {
  display: grid;
  height: 90vh;
  place-items: center;
  background: #999999;
}
</style>

<style>
* {
  box-sizing: border-box;
}
</style>
