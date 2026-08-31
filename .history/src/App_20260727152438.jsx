import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './layout/Dashboard'
import Employee from './pages/Employee'


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
        path:'/employee',
        element:<Employee/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
