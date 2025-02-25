import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation, Route } from "react-router-dom";
import { StoreProvider } from "./store";
import "./style/index.scss";
import App from "./pages/App";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

// Definisci le rotte
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/experience",
    element: <Work />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  </StoreProvider>
);
