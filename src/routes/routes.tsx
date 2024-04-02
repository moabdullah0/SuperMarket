import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home/HomePage";

import AboutUs from "../components/About Us/AboutUs";
import Contact from "../components/Contact/Contact";
import Faq from "../components/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "aboute",

    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
]);

export default router;
