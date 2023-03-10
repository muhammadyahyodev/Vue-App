import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signin",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "registration",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/Admin/Admin.vue"),

      children: [
        {
          path: "/admin/add",
          name: "add",
          component: () => import("../views/Admin/AddAdmin.vue"),
        },
        {
          path: "/admin/list",
          name: "list",
          component: () => import("../views/Admin/AdminLists.vue"),
        },
      ],
    },

    {
      path: "/category",
      component: () => import("@/views/Category/Category.vue"),

      children: [
        {
          path: "/category/add",
          name: "add",
          component: () => import("@/views/Category/AddCategory.vue"),
        },
        {
          path: "/category/list",
          name: "list",
          component: () => import("@/views/Category/CategoryLists.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "erorr",
      component: () => import("../views/Error/NotFound.vue"),
    },
  ],
});

export default router;
