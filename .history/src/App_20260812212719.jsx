import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { Dashboard } from './layout/Dashboard'
import Employee from './pages/Employee'
import Lead from './pages/Lead'
import Properties from './pages/Properties'
import Task from './pages/Task'
import Report from './pages/Report'
import Customer from './pages/Customer'
import Login from './pages/Login'
import { LeadProvider } from './ContextAPI/LeadContext'
import { TaskProvider } from './ContextAPI/TaskContext'
import { EmployeeProvider } from './ContextAPI/EmployeeContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Home />
      },
      {
        path: '/dashboard/employees',
        element: (
          <EmployeeProvider>
            <Employee />
          </EmployeeProvider>
        )
      },
      {
        path: "/dashboard/leads",
        element:
          (
            <LeadProvider>
              <Lead />
            </LeadProvider>
          )
      },
      {
        path : "/dashboard/leadDashboard"
      },
      // {
      //   path: "/properties",
      //   element : <Properties/>
      // },
      {
        path: "/dashboard/tasks",
        element: (
          <TaskProvider>
            <Task />
          </TaskProvider>
        )
      },
      {
        path: "/dashboard/reports",
        element: <Report />
      },
      // {
      //   path : "/customers",
      //   element : <Customer/>
      // }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
