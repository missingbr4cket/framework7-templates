import type { Router } from "framework7/types";
import Home from "../pages/home.svelte";
import About from "../pages/about.svelte";
import NotFound from "../pages/404.svelte";

var routes: Router.RouteParameters[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '(.*)',
    component: NotFound,
  }
];

export default routes;