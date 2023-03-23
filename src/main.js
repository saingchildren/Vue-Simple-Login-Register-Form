import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./route";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import BootstrapVueNext from "bootstrap-vue-next";


const app = createApp(App);

app.use(router);
app.use(BootstrapVueNext);

app.mount("#app");
