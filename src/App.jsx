import React from "react";

//route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import JoinUs from "./pages/JoinUs";
import ContactUs from "./pages/ContactUs";
import VendorSignUp from "./pages/VendorSignUp";
import VendorSignIn from "./pages/VendorSignIn";
import VendorDashboard from "./pages/VendorDashboard";
import AddFleat from "./pages/AddFleet";
import BookNow from "./pages/BookNow";
import FleetDetails from "./pages/FleetDetails";
import Preferences from "./pages/Preferences";
import CheckOut from "./pages/CheckOut";

function App() {
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
      path: "/SignIn",
      element: <SignIn />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
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
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
    // <Home/>
    // <SignIn/>
    // <SignUp/>
  );
}

export default App;
