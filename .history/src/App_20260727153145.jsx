import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { Dashboard }from './layout/Dashboard'
import Employee from './pages/Employee'
import Lead from './pages/Lead'
import Properties from './pages/Properties'
import Task from './pages/Task'
import Report from './pages/Report'
import Customer from './pages/Customer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, 
    children: [
      {
        path :"/",
        element: <Home/>
      },
      {
        path:'/employees',
        element:<Employee/>
      },
      {
        path :"/leads",
        element:<Lead/>
      },
      {
        path: "/properties",
        element : <Properties/>
      },
      {
        path:"/tasks",
        element : <Task/>
      },
      {
        path : "/reports",
        element : <Report/>
      },
      {
        path : "/customers",
        element : <Customer/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
