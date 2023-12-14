import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Visi from "./pages/Visi";
import AboutUs from "./pages/AboutUs";
import Articles from "./pages/articles/Articles";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Clients from "./pages/Clients";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/company-profile-website/",
        element: <Home />,
    },
    { path: "/company-profile-website/profile", element: <Home /> },
    { path: "/company-profile-website/visi", element: <Visi /> },
    { path: "/company-profile-website/about", element: <AboutUs /> },
    { path: "/company-profile-website/articles", element: <Articles /> },
    { path: "/company-profile-website/products", element: <Products /> },
    { path: "/company-profile-website/contact", element: <Contact /> },
    { path: "/company-profile-website/gallery", element: <Gallery /> },
    { path: "/company-profile-website/events", element: <Events /> },
    { path: "/company-profile-website/clients", element: <Clients /> },
    // { path: "/login", element: <Home /> },
    // { path: "/register", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
