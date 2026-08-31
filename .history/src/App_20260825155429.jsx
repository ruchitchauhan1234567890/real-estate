import React from "react"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/Home"
import { Dashboard } from "./layout/Dashboard"
import Employee from "./pages/Employee"
import Lead from "./pages/Lead"
import Task from "./pages/Task"
import Report from "./pages/Report"
import Login from "./pages/Login"

import { LeadProvider } from "./ContextAPI/LeadContext"
import { TaskProvider } from "./ContextAPI/TaskContext"
import { EmployeeProvider } from "./ContextAPI/EmployeeContext"

import LeadDashboard from "./pages/LeadDashboard"
import EmployeeDashboard from "./pages/EmployeeDashboard"

import ProtectedRoute from "./component/Auth/ProtectedRoute"
import AdminRoute from "./component/Auth/AdminRoute"
import PublicRoute from "./component/Auth/PublicRoute"


const router = createBrowserRouter([
  
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Login />
      }
    ]
  },
  

  {
    element: <ProtectedRoute />,
    children: [

      {
        path: "/dashboard",
        element: <Dashboard />,

        children: [
          {
            index: true,
            element: <Home />
          },
          {
            element: <AdminRoute />,
            children: [
              {
                path: "employees",
                element: (
                  <EmployeeProvider>
                    <Employee />
                  </EmployeeProvider>
                )
              },
              {
                path: "leadDashboard",
                element: <LeadDashboard />
              },
              {
                path: "reports",
                element: <Report />
              }

            ]
          },
          {
            path: "leads",
            element: (
              <LeadProvider>
                <Lead />
              </LeadProvider>
            )
          },

          {
            path: "tasks",
            element: (
              <TaskProvider>
                <Task />
              </TaskProvider>
            )
          },


          // =========================
          // EMPLOYEE DASHBOARD
          // =========================

          {
            path: "employeeDashboard",
            element: <EmployeeDashboard />
          }

        ]
      }

    ]
  }

])


const App = () => {
  return <RouterProvider router={router} />
}

export default App