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
import AuthProvider from './provider/AuthProvider';
import PrivetRoute from './privetRoutes/PrivetRoute';
import Dashboard from './Layout/Dashboard';
import AllUsers from './pages/AdminPages/AllUsers/AllUsers';
import AllArticles from './pages/AdminPages/AllArticles/AllArticles';
import AddPublisher from './pages/AdminPages/AddPublisher/AddPublisher';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails';
import Error from './pages/Error/Error';
import AdminAllArticle from './pages/AdminPages/AdminAllArticles/AdminAllArticle';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/AddArticle",
        element: <PrivetRoute><Artical/></PrivetRoute>
      },
      {
        path: "/allarticles",
        element: <PrivetRoute><AllArticles/></PrivetRoute>
      },
      {
        path: '/articleDetails/:id',
        loader: ({params}) => fetch(`https://newsportal-server-one.vercel.app/articleDetails/${params.id}`),
        element: <PrivetRoute><ArticleDetails/></PrivetRoute>
      },
      {
        path: "/Register",
        element: <Register/>, 
      },
      {
        path: "/Login",
        element: <Login/>, 
      },
      {
        path: "dashboard",
        element: <PrivetRoute><Dashboard/></PrivetRoute> 
      },
 
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'allUsers',
        element: <AllUsers/>,
      },
      {
        path: 'dashboard/adminallarticls',
        element: <AdminAllArticle/>,
      },
      {
        path: "dashboard/addpublisher",
        element: <AddPublisher/>
      }

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
