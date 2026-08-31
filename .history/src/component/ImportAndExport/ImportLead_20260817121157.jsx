import React from 'react'
import * as XLSX from "xlsx"

const ImportLead = () => {
    const handleFileSelect = (e) => {
        const { files} = e.target
        const file = files[0]
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
        }
    }
  return (
    <div>
      <h1>Import Lead</h1>
      <input type="file" accept='.xlsx,.xls' onChange={handleFileSelect} />
    </div>
  )
}

export default ImportLead
