import { createContext, useState } from "react";

export const LeadContext = createContext()

export const LeadProvider = ({ children }) => {


    const [leadData, setLeadData] = useState([])
    const [selectedLead, setSelectedLead] = useState([])
    const [selectedEmp, setSelectedEmp] = useState(null)

    return <LeadContext.Provider value={
        leadData = { leadData },
        setLeadData = { setLeadData },
        selectedEmp = { selectedEmp },
        setSelectedEmp = { setSelectedEmp },
        selectedLead = { selectedLead },
        setSelectedLead = { setSelectedLead }
     }>{children}</LeadContext.Provider>
}