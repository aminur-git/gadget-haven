import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./assets/Components/Nav/Navbar.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import Error from "./assets/Components/Error/Error.jsx";
import Statistics from "./assets/Components/Statistics/Statistics.jsx";
import Root from "./assets/Components/Root/Root.jsx";
import ProductType from "./assets/Components/ProductTypes/ProductType.jsx";
import Cart from "./assets/Components/Cart/Cart.jsx";
import Dashboard from "./assets/Components/DashBoard/Dashboard.jsx";
import Wishlist from "./assets/Components/Wish-list/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    loader: () => fetch("../public/products.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: "/product-details/:productId",
        element: <ProductType></ProductType>,
      },
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
