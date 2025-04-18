import { createBrowserRouter, Outlet } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import FavoritePage from "../pages/FavoritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("productsData.json"),
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "cart",
        Component: CartPage,
      },
      {
        path: "favorites",
        Component: FavoritePage,
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-2xl">404 Not Found!</h1>,
  },
]);
