import { createContext } from "react";

export const leadContext = createContext()

export const leadProvider  = ({children}) => {
    return <leadContext value={}>{children}</leadContext>
}