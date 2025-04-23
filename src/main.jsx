import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./assets/Components/Nav/Navbar.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import Error from "./assets/Components/Error/Error.jsx";
import Statistics from "./assets/Components/Statistics/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
