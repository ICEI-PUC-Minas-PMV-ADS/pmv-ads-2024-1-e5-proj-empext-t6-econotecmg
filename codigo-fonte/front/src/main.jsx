import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './routes/HomePage.jsx';
import Login from './routes/Login.jsx';

//const router = createBrowserRouter ([
// {
//    path: "/",
//    element: <HomePage /> 
//  },
//  {
//    path: "Login",
//    element: <Login />,
//  },
//]);

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  < RouterProvider router={router} />
  </React.StrictMode>,
)
