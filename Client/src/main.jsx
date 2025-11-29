import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Builder from './Components/CV Builder/Builder';
// import { Navigate } from 'react-router-dom';
import NormalDesign from './Components/CV Builder Design/NormalDesign';
import LayoutSelection from './Components/CV Builder/LayoutSelection';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Error from './Components/CV Builder/Error';
import Design from './Components/CV Builder Design/Design';
import Layout from './Components/Layout';
import ProtectedRoute from './Components/Utils/ProtectedRoute';


const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
console.log("Authenticated:", isAuthenticated);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        ),
      },
      {
        path: "/normalDesign",
        element: <NormalDesign />,
      },
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/layoutSelection",
        element: <LayoutSelection />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
