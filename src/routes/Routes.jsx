import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/home/Home";
import CategoryNews from "../components/pages/category/CategoryNews";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Auth page</h1>,
  },
  {
    path: "/news",
    element: <h1>News page</h1>,
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);
