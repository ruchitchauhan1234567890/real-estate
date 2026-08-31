import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [taskData, setTaskData] = useState(
        JSON.parse(localStorage.getItem("tasks"))
    )

    return <TaskContext.Provider value={{taskData,setTskData}}>{children}</TaskContext.Provider>
}