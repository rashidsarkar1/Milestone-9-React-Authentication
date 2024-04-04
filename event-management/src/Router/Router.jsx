import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../Components/About";
import ServicesDetails from "../Pages/services/ServicesDetails";
import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";
import Venues from "../Components/Venues";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/Venues",
        element: (
          <PrivateRoute>
            <Venues></Venues>,
          </PrivateRoute>
        ),
      },
      {
        path: "/servicesDetails/:idx",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
