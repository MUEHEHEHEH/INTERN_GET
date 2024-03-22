import React from "react";

//route
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../Components/routes/AuthRoute";
import ProtectedRoute from "../Components/routes/ProtectedRoutes";

//pages

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import JoinUs from "../pages/JoinUs";
import ContactUs from "../pages/ContactUs";
import VendorSignUp from "../pages/VendorSignUp";
import VendorSignIn from "../pages/VendorSignIn";
import VendorDashboard from "../pages/VendorDashboard";
import AddFleat from "../pages/AddFleet";
import BookNow from "../pages/BookNow";
import BookNow2 from "../pages/BookNow2";
import FleetDetails from "../pages/FleetDetails";
import Preferences from "../pages/Preferences";
import CheckOut from "../pages/CheckOut";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/VendorDashboard",
    element: <VendorDashboard />,
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/JoinUs",
        element: <JoinUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/VendorSignIn",
        element: <VendorSignIn />,
      },
      {
        path: "/VendorSignUp",
        element: <VendorSignUp />,
      },

      {
        path: "/VendorDashboard",
        element: <VendorDashboard />,
      },
      {
        path: "/AddFleat",
        element: <AddFleat />,
      },
      {
        path: "/BookNow",
        element: <BookNow />,
      },
      {
        path: "/BookNow2",
        element: <BookNow2 />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
      {
        path: "/FleetDetails/:id",
        element: <FleetDetails />,
      },
      {
        path: "/Preferences/:id",
        element: <Preferences />,
      },
      {
        path: "/CheckOut/:id",
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
