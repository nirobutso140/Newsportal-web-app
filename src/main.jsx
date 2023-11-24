import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Artical from './pages/ArticleAdding/Artical';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/AddArticle",
        element: <Artical/>
      },
      {
        path: "/Register",
        element: <Register/>, 
      },
      {
        path: "/Login",
        element: <Login/>, 
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
