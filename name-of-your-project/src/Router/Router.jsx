import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import About from "../Components/About";
import Gallery from "../Components/Venues";
import Card from "../Components/Card";
import ServiceDetails from "../Pages/services/ServicesDetails";
import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../Pages/NotFound ";
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
            <ServiceDetails></ServiceDetails>,
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
