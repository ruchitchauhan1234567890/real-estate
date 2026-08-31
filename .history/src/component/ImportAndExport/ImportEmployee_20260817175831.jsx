import React from 'react'
import * as XLSX from "xlsx";

const ImportEmployee = ({ ref }) => {
    const handleFileSelect = (e) => {
        const file = e.target.files[0]
        
        const reader = new FileReader()

        reader.onload =(event) => {
            const data = event.target.result;
            const workBook = XLSX.read(data,{
                type:"array"
            })

            const sheetName = workBook.SheetName[0];
            const worksheet = workBook.Sheets[sheetName]
            console.log(sheetName)
            console.log(worksheet)
        }

        reader.readAsArrayBuffer(file)
    }

    return (
        <div>
            <input
                ref={ref}
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={handleFileSelect}
            />
        </div>
    )
}

export default ImportEmployee
