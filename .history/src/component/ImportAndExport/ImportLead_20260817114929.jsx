import React from 'react'
import * as XLSX from "xlsx"

const ImportLead = () => {
    const handleFileSelect = (e) => {
        const {name, file} = e.target
    }
  return (
    <div>
      <h1>Import Lead</h1>
      <input type="file" accept='.xlsx,.xls' onChange={handleFileSelect} />
    </div>
  )
}

export default ImportLead
