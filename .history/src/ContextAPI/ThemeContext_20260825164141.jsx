import { useContext, useState } from "react";

export const ThemeContext = useContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")
}