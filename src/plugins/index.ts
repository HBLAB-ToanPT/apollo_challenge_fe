/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import { VueQueryPlugin } from "@tanstack/vue-query";
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Vue3Toastify, {
      autoClose: 1500,
      position: "bottom-right",
    } as ToastContainerOptions)
    .use(VueQueryPlugin);
}
