import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import AddCraft from "../Pages/AddCraft";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyArtList from "../Pages/MyArtList";
import CraftDetails from "../components/CraftDetails";
import UpdateCraft from "../components/UpdateCraft";

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
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art-list",
        element: (
          <PrivateRoute>
            <MyArtList />
          </PrivateRoute>
        ),
      },
      {
        path: "/craft/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateCraft />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
    ],
  },
]);
