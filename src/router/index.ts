/**
 * router/index.ts
 *
 */

import { createWebHistory, createRouter } from "vue-router";
import CreatePage from "../pages/customer/CreatePage.vue";
import EditPage from "../pages/customer/EditPage.vue";
import ListPage from "../pages/customer/ListPage.vue";

const routes = [
  { path: "/", component: ListPage },
  { path: "/create", component: CreatePage },
  { path: "/:id", component: EditPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
