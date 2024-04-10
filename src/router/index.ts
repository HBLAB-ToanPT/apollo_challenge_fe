/**
 * router/index.ts
 *
 */

import { createWebHistory, createRouter } from "vue-router";
import Default from "@/layouts/default.vue";
import CreatePage from "../pages/customer/CreatePage.vue";
import EditPage from "../pages/customer/EditPage.vue";
import ListPage from "../pages/customer/ListPage.vue";

const routes = [
  { path: "/", component: ListPage, meta: { layout: Default } },
  { path: "/create", component: CreatePage, meta: { layout: Default } },
  { path: "/:id", component: EditPage, meta: { layout: Default } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
