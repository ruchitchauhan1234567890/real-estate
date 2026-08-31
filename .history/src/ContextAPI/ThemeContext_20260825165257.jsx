import {
    createContext,
    useEffect,
    useState
} from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })


    // Apply theme to HTML
    useEffect(() => {

        const root = document.documentElement

        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

        // Save theme
        localStorage.setItem("theme", theme)

    }, [theme])


    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}