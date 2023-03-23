<script setup>
import { ref } from "vue";
import AuthService from "../auth-service/AuthService";
const email = ref("");
const password = ref("");
const onSubmit = () => {
  AuthService.login(email.value, password.value).then((res) => {
    console.log(res.data);
    window.alert("login success");
  });
  email.value = "";
  password.value = "";
};
</script>
<template>
  <div class="login-div">
    <h1>Login Page</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Email" lable-for="inputAccount">
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
.login-div {
  font-size: 1.5rem;
  color: #010101;
  margin: 0;
  text-align: center;
  border: 2px solid;
  padding: 50px;
  border-radius: 20px;
}

.login-div > h1 {
  margin-bottom: 30px;
}
</style>
