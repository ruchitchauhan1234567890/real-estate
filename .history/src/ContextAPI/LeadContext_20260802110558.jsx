import { createContext } from "react";

export const leadContext = createContext()

export const leadProvider = ({ children }) => {


    const [leadData, setLeadData] = useState([])
    const [selectedLead, setSelectedLead] = useState([])
    const [selectedEmp, setSelectedEmp] = useState(null)
    
    return <leadContext value={ }>{children}</leadContext>
}