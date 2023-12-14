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
    {
        path: "https://shoann.github.io/company-profile-website/company-profile-website/",
        element: <Home />,
    },
    { path: "https://shoann.github.io/profile", element: <Home /> },
    { path: "https://shoann.github.io/visi", element: <Visi /> },
    { path: "https://shoann.github.io/about", element: <AboutUs /> },
    { path: "https://shoann.github.io/articles", element: <Articles /> },
    { path: "https://shoann.github.io/products", element: <Products /> },
    { path: "https://shoann.github.io/contact", element: <Contact /> },
    { path: "https://shoann.github.io/gallery", element: <Gallery /> },
    { path: "https://shoann.github.io/events", element: <Events /> },
    { path: "https://shoann.github.io/clients", element: <Clients /> },
    // { path: "/login", element: <Home /> },
    // { path: "/register", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
