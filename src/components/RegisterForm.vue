<script setup>
import { ref, watch } from "vue";
import AuthService from "../auth-service/AuthService";
console.log(AuthService);
const username = ref("");
const email = ref("");
const password = ref("");
const onSubmit = () => {
  AuthService.register(username.value, email.value, password.value)
    .then(() => {
      window.alert("Register Success");
      console.log("success");
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  username.value = "";
  email.value = "";
  password.value = "";
};
</script>
<template>
  <div class="register-div">
    <h1>Register Page</h1>
    <b-form class="register-form" @submit.prevent="onSubmit">
      <b-form-group label="Username" lable-for="inputUsername">
        <b-form-input
          v-model="username"
          id="inputUsername"
          type="text"
          placeholder="Enter Username"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Email" lable-for="inputEmail">
        <b-form-input
          v-model="email"
          id="inputEmail"
          type="text"
          placeholder="Enter Email"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Password" lable-for="inputPassword">
        <b-form-input
          v-model="password"
          id="inputPassword"
          type="text"
          placeholder="Enter Password"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button @click="onSubmit" class="fs-6 mt-3" variant="primary"
        >submit</b-button
      >
    </b-form>
  </div>
</template>

<style scope>
.register-div {
  font-size: 1.5rem;
  color: #010101;
  margin: 0;
  text-align: center;
  border: 2px solid;
  padding: 50px;
  border-radius: 20px;
  backdrop-filter: blur(20px) saturate(150%) contrast(170%);
}

.register-div > h1 {
  margin-bottom: 30px;
}
</style>
