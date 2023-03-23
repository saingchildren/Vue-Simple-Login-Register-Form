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
  background: linear-gradient(45deg, #F49938, #6028B1);
  place-items: center;
}
</style>

<style>
* {
  box-sizing: border-box;
}
</style>
