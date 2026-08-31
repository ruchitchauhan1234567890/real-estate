import { createContext, useState } from "react";

export const LeadContext = createContext()

export const LeadProvider = ({ children }) => {


    const [leadData, setLeadData] = useState([])
    const [selectedLead, setSelectedLead] = useState([])
    const [selectedEmp, setSelectedEmp] = useState(null)

    return (<LeadContext.Provider value={
        {
            leadData,
            setLeadData,
            selectedLead,
            setSelectedLead,
            selectedEmp,
            setSelectedEmp
        }
    }>{children}</LeadContext.Provider>
    )
}