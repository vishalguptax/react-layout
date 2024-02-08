import { lazy } from "react";

export const allRoutes = [
  {
    key: "home",
    path: "/",
    component: lazy(() => import("../../pages/Home")),
  },
  {
    key: "profile",
    path: "/profile",
    component: lazy(() => import("../../pages/Profile")),
  },
  {
    key: "about",
    path: "/about",
    component: lazy(() => import("../../pages/About")),
  },
];
