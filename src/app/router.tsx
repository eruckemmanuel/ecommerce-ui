import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../pages/products";
import LoginPage from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);
