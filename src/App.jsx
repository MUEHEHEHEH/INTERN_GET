import React from "react";

// //route
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

// import AuthRoute from "./Components/routes/AuthRoute";
// import ProtectedRoute from "./Components/routes/ProtectedRoutes";

// //pages
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import JoinUs from "./pages/JoinUs";
// import ContactUs from "./pages/ContactUs";
// import VendorSignUp from "./pages/VendorSignUp";
// import VendorSignIn from "./pages/VendorSignIn";
// import VendorDashboard from "./pages/VendorDashboard";
// import AddFleat from "./pages/AddFleet";
// import BookNow from "./pages/BookNow";
// import FleetDetails from "./pages/FleetDetails";
// import Preferences from "./pages/Preferences";
// import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
