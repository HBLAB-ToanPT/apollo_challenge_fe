/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import "vue3-toastify/dist/index.css";
import { createApp } from "vue";

const app = createApp(App);
registerPlugins(app);

app.mount("#app");
