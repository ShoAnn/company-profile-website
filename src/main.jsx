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
    { path: "/profile", element: <Home /> },
    { path: "/visi", element: <Visi /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/articles", element: <Articles /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/events", element: <Events /> },
    { path: "/clients", element: <Clients /> },
    // { path: "/login", element: <Home /> },
    // { path: "/register", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
