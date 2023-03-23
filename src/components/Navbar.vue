<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <b-navbar toggleable="lg" class="navbar">
      <b-navbar-brand class="fs-2" href="#">SIC_VUE_LOGIN</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="nav-collapse" id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto nav-link">
          <b-nav-item>
            <RouterLink to="register">Register</RouterLink>
          </b-nav-item>
          <b-nav-item>
            <RouterLink to="login">Login</RouterLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scope>
.navbar {
  background: #e97835;
  font-size: 1.5rem;
}
.nav-link {
  text-align: end;
}

.nav-link > * {
  margin: 0.3rem;
  padding-right: 0.2rem;
  color: black;
  text-decoration: none;
}

.nav-link > *:hover {
  color: black;
  background: #f01;
}
</style>
