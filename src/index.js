import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation, Route } from "react-router-dom";
import { StoreProvider } from "./store";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Importa la libreria
import "./style/index.scss";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

// Definisci le rotte
const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/work",
    element: <Work />,
  }
]);

// Componente per gestire le animazioni per ogni pagina

const PageTransition = ({ children }) => {
  const location = useLocation(); 

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} 
        classNames="fade"
        timeout={300}
      >
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
        <PageTransition>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
        </PageTransition>
      </RouterProvider>
    </React.StrictMode>
  </StoreProvider>
);
