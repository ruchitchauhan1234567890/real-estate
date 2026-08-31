import React from 'react'
import * as XLSX from "xlsx"

const ImportLead = () => {
    const requiredFields = ["name", "email", "phone"];
    const handleFileSelect = (e) => {
        const { files } = e.target
        const file = files[0]

        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;

            const workBook = XLSX.read(data, {
                type: Array
            })


            const sheetName = workBook.SheetNames[0];
            const worksheet = workBook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            console.log(jsonData)

            const isValid = jsonData.every((lead) =>
                requiredFields.every((field) =>
                    Object.prototype.hasOwnProperty.call(lead, field)
                ))
            console.log("valid", isValid)
        };
        reader.readAsArrayBuffer(file)
        const existingLeads =
            JSON.parse(localStorage.getItem("leads")) || [];

        const newLeads = jsonData.map((lead) => ({
            ...lead,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        }));

        const updatedLeads = [
            ...existingLeads,
            ...newLeads
        ];

        localStorage.setItem(
            "leads",
            JSON.stringify(updatedLeads)
        );

    }
    return (
        <div>
            <h1>Import Lead</h1>
            <input type="file" accept='.xlsx,.xls' onChange={handleFileSelect} />
        </div>
    )
}

export default ImportLead
