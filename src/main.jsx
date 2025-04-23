import { createContext, StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./assets/Components/Nav/Navbar.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import Error from "./assets/Components/Error/Error.jsx";
import Statistics from "./assets/Components/Statistics/Statistics.jsx";
import Root from "./assets/Components/Root/Root.jsx";
import Product from "./assets/Components/Product/Product.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    loader: () => fetch('../public/products.json'),
    children:[
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
