import { createContext, useState } from "react";

export const leadContext = createContext()

export const LeadProvider = ({ children }) => {


    const [leadData, setLeadData] = useState([])
    const [selectedLead, setSelectedLead] = useState([])
    const [selectedEmp, setSelectedEmp] = useState(null)

    return <leadContext.Provider value={
        leadData = { leadData },
        setLeadData = { setLeadData },
        selectedEmp = { selectedEmp },
        setSelectedEmp = { setSelectedEmp },
        selectedLead = { selectedLead },
        setSelectedLead = { setSelectedLead }
     }>{children}</leadContext.Provider>
}