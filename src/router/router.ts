import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Generate from "../pages/Generate";
import Manage from "../pages/Manage";
import Settings from "../pages/Settings";
import AllPasswords from "../components/managepage/AllPasswords";
import Favorites from "../components/managepage/Favorites";
import RecentPasswords from "../components/managepage/RecentPasswords";
import About from "../pages/About";
import Features from "../components/aboutpage/Features";
import Techs from "../components/aboutpage/Techs";
import Support from "../components/aboutpage/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "generate",
        Component: Generate,
      },

      {
        path: "manage",
        Component: Manage,
        children: [
          {
            index: true,
            Component: AllPasswords,
          },
          {
            path: "favorites",
            Component: Favorites,
          },
          {
            path: "recent",
            Component: RecentPasswords,
          },
        ],
      },

      {
        path: "settings",
        Component: Settings,
      },
    ],
  },
  {
    path: "about",
    Component: About,
    children: [
      {
        index: true,
        Component: Features,
      },
      {
        path: "technologies",
        Component: Techs,
      },
      {
        path: "support",
        Component: Support,
      },
    ],
  },
]);
