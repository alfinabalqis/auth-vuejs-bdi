import Home from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/Profil.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: () => import("../components/BoardAdmin.vue"),
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: () => import("../components/BoardModerator.vue"),
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: () => import("../components/BoardUser.vue"),
  },
];

export default routes;
