import { createApp } from "vue";
import App from "./App.vue";
//mitt
import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);
//자주 쓰는 라이브러리 여기에 등록 .axios = axios > vue파일에서 import 할 필요없이 this.axios 로 사용가능
app.config.globalProperties.emitter = emitter;

//vuex
import store from "./store.js";

import './registerServiceWorker'

app.use(store).mount("#app");
