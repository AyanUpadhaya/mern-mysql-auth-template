import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NewProduct from "../pages/NewProduct";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
  {
    path: "/",
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
  {
    path: "/products/new",
    element: (
      <AuthRoute>
        <NewProduct />
      </AuthRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <AuthRoute>
        <ProductDetail />
      </AuthRoute>
    ),
  },
]);

export default router;
