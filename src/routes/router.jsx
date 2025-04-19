import { createBrowserRouter, Outlet } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import FavoritePage from "../pages/FavoritePage";
import ProductDetailPage from "../pages/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        hydrateFallbackElement: <h1>Loading...</h1>,
        loader: () => fetch("../productsData.json"),
      },
      {
        path: "products/:productId",
        Component: ProductDetailPage,
        hydrateFallbackElement: <h1>Loading...</h1>,
        loader: () => fetch("../productsData.json"),
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
        hydrateFallbackElement: <h1>Loading...</h1>,
        loader: () => fetch("../productsData.json"),
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-2xl">404 Not Found!</h1>,
  },
]);
