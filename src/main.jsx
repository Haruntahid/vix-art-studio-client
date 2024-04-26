import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </AuthProvider>
  </>
);
