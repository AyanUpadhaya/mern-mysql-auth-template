import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

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
]);

export default router;
