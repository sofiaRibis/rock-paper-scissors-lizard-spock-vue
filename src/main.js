import { createApp } from "vue";

import router from "./router.js";
import App from "./App.vue";
import "./web/css/style.css";

const app = createApp(App);
app.use(router);

app.mount("#app");
