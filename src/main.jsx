import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import "daisyui/dist/full.css";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProviders from './Providers/AuthProviders';
import HomePage from './components/HomePage/HomePage';

import Orders from './components/Orders/Orders';
import PrivateRoute from './Providers/privateRoute';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        
        path: '/orders',
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
 <AuthProviders>
 <RouterProvider router={router}></RouterProvider>
 </AuthProviders>
     
  </React.StrictMode>,
)
