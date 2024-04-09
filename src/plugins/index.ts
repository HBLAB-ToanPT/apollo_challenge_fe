/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import ToastPlugin from "vue-toast-notification";
import { VueQueryPlugin, VueQueryPluginOptions } from "@tanstack/vue-query";
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";

// Types
import type { App } from "vue";

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(pinia)
    .use(Vue3Toastify, {
      autoClose: 1500,
      position: "bottom-right",
      pauseOnFocusLoss: false,
    } as ToastContainerOptions)
    .use(ToastPlugin, {
      position: "bottom-right",
      autoClose: 1500,
    })
    .use(router)
    .use(VueQueryPlugin, vueQueryPluginOptions);
}
