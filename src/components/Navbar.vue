<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <b-navbar toggleable="lg" class="navbar">
      <b-navbar-brand class="fs-2 home-link" href="#">
        <RouterLink to="/"> SIC_VUE_LOGIN </RouterLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="nav-collapse" id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto nav-link">
          <RouterLink to="/">HomePage</RouterLink>
          <RouterLink to="register">Register</RouterLink>
          <RouterLink to="login">Login</RouterLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scope>
.navbar {
  background: #888888;
  font-size: 1.7rem;
}

.home-link > * {
  text-decoration: none;
  color: black;
}

.nav-link {
  text-align: end;
}

.nav-link > * {
  margin: 0 0 0.3rem 0;
  padding-left: 0.5rem;
  padding-right: 0.7rem;
  color: black;
  text-decoration: none;
}

.nav-link > *:hover {
  color: black;
  background: #bbbbbb;
}

.home-link > *:hover {
  color: black;
}
</style>
