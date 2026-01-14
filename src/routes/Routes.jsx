import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/home/Home";
import CategoryNews from "../components/pages/category/CategoryNews";
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";
import AuthLayout from "../layouts/AuthLayout";

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
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
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
