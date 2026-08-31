import { createContext } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [editedEmp, setEditedEmp] = useState(null)

    return (<EmployeeContext.Provider value={{ data, setData, open, setOpen, editedEmp, setEditedEmp }}>{children}<EmployeeContext.Provider />)
    }