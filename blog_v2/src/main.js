import { createApp } from "vue";
import App from "./App.vue";
//bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//router
import router from "./router.js";

createApp(App).use(router).mount("#app");
