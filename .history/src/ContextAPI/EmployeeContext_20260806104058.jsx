import { createContext } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children}) => {


    return <EmployeeContext.Provider value={{}}>{children}<EmployeeContext.Provider /> 
}