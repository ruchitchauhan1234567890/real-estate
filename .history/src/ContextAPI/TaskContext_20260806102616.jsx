import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [taskData, setTaskData] = useState(
        JSON.parse(localStorage.getItem("tasks"))
    )
    const [editedTask, setEditedTask] = useState(null)
    const [open, setOpen] = useState(false)

    return (<TaskContext.Provider value={{ taskData, setTaskData }}>{children}</TaskContext.Provider>)
}