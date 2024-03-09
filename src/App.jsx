import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import JoinUs from "./pages/JoinUs";
import ContactUs from "./pages/ContactUs";

function App() {

  const router = createBrowserRouter([
      {
        path:"/",
        element: <Home/> 
      },
      {
        path:"/Home",
        element: <Home/> 
      },
      {
        path:"/SignIn",
        element:<SignIn/>
      },
      {
        path: "/SignUp",
        element: <SignUp/>
      },
      {
        path: "/JoinUs",
        element: <JoinUs/>
      },
      {
        path: "/ContactUs",
        element: <ContactUs/>
      },

  ]); 


  return (
    <RouterProvider router={router}></RouterProvider>
    // <Home/>
    // <SignIn/>
    // <SignUp/>
  );
}

export default App
