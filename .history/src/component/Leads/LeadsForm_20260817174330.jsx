import React, {
  useContext,
  useRef,
  useState
} from "react";

import AddLead from "./AddLead";
import AssignedModel from "./AssignedModel";

import { LeadContext } from "../../ContextAPI/LeadContext";

import ImportLead from "../ImportAndExport/ImportLead";

const LeadsForm = ({
  open,
  setOpen,
  setEditedLead,
  editedLead
}) => {

  const [openModel, setOpenModel] = useState(false);

  const importInputRef = useRef(null);

  const {
    leadData,
    setLeadData,
    selectedLead,
    setSelectedLead,
    selectedEmp,
    setSelectedEmp
  } = useContext(LeadContext);

  const loggedUser =
    JSON.parse(localStorage.getItem("loggedUser"));

  const item = selectedLead.length;

  const handleImportClick = () => {
    importInputRef.current?.click();
  };

  const handleImportComplete = (updatedLeads) => {
    // Update React state
    setLeadData(updatedLeads);
  };

  return (
    <div className="flex justify-between items-center shadow-sm h-12 px-2">

      <p className="font-bold text-2xl">
        Leads Management
      </p>

      <div>

        {loggedUser.isAdmin && (
          <button
            disabled={selectedLead.length === 0}
            onClick={() =>
              setOpenModel(!openModel)
            }
            className={
              selectedLead.length === 0
                ? "px-2 w-auto h-auto py-1 m-2 rounded-sm bg-gray-400 cursor-not-allowed"
                : "px-2 py-1 m-2 rounded-sm bg-blue-400 cursor-pointer"
            }
          >
            Assigned
          </button>
        )}

        {/* IMPORT BUTTON */}

        {
          loggedUser.isAdmin &&
          <button
            onClick={handleImportClick}
            className="px-2 py-1 m-2 rounded-sm border shadow-sm"
          >
            Import
          </button> 
        }

        {/* Hidden Excel input */}

        <ImportLead
          ref={importInputRef}
          onImportComplete={handleImportComplete}
        />

        {loggedUser.isAdmin && (
          <button
            className="px-2 py-1 m-2 rounded-sm bg-blue-400 hover:bg-blue-500"
            onClick={() => setOpen(!open)}
          >
            Add Lead
          </button>
        )}

      </div>

      {loggedUser.isAdmin && open && (
        <AddLead
          open={open}
          setOpen={setOpen}
          setEditedLead={setEditedLead}
          editedLead={editedLead}
        />
      )}

      {openModel && (
        <AssignedModel
          openModel={openModel}
          setOpenModel={setOpenModel}
          item={item}
        />
      )}

    </div>
  );
};

export default LeadsForm;