/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { VueQueryPlugin, VueQueryPluginOptions } from "@tanstack/vue-query";
import ToastPlugin from "vue-toast-notification";
import router from "../router";
import pinia from "../stores";
import vuetify from "./vuetify";

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
    .use(ToastPlugin, {
      position: "bottom-right",
      autoClose: 1500,
    })
    .use(router)
    .use(VueQueryPlugin, vueQueryPluginOptions);
}
