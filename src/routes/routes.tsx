

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home/HomePage";

import AboutUs from "../components/About Us/AboutUs";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/aboute",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

export default router;
