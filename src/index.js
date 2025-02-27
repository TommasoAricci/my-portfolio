import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StoreProvider } from './store';
import './style/index.scss';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Projects from './pages/Projects';
import './style/pages/lightMode.scss';

// Definisci le rotte
const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/work',
    element: <Work />,
  },
  {
    path: '/experience',
    element: <Work />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </StoreProvider>
);
