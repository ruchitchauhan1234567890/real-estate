import React from 'react'
import * as XLSX from "xlsx";

const ImportEmployee = ({ ref }) => {

    const requiredFields = ["name", "email", "phone","password", "isAdmin"];

    const handleFileSelect = (e) => {
        const file = e.target.files[0]

        const reader = new FileReader()

        reader.onload = (event) => {
            const data = event.target.result;
            const workBook = XLSX.read(data, {
                type: "array"
            })

            const sheetName = workBook.SheetNames[0];
            const worksheet = workBook.Sheets[sheetName]
            console.log(sheetName)
            console.log(worksheet)

            const jsonData = XLSX.utils.sheet_to_json(
                worksheet,
                {
                    raw: false,
                    defval: "",
                }
            );

            console.log(jsonData)
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
