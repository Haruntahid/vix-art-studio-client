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
import ErrorPage from "../Pages/ErrorPage";
import SingleCategory from "../components/SingleCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        loader: () => fetch("https://vix-art-studio.vercel.app/crafts"),
      },
      {
        path: "/category/:name",
        element: <SingleCategory />,
        // loader: ({ params }) =>
        //   fetch(`https://vix-art-studio.vercel.app/subcategory/${params.name}`),
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
          fetch(`https://vix-art-studio.vercel.app/craft/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://vix-art-studio.vercel.app/craft/${params.id}`),
      },
    ],
  },
]);
