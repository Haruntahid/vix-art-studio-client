import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import AddCraft from "../Pages/AddCraft";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-craft",
        element: <AllArtAndCraft />,
      },
      {
        path: "/add-craft",
        element: <AddCraft />,
      },
    ],
  },
]);
