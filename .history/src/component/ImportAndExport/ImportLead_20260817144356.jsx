import React from "react";
import * as XLSX from "xlsx";

const ImportLead = ({ onImportComplete }) => {

    const requiredFields = ["name", "email", "phone"];

    const excelDateToString = (value) => {
        if (typeof value !== "number") {
            return value;
        }

        const date = XLSX.SSF.parse_date_code(value);

        if (!date) {
            return value;
        }

        const day = String(date.d).padStart(2, "0");
        const month = String(date.m).padStart(2, "0");
        const year = date.y;

        return `${day}/${month}/${year}`;
    };

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;

            const workBook = XLSX.read(data, {
                type: "array",
            });

            const sheetName = workBook.SheetNames[0];
            const worksheet = workBook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            console.log("Excel Data:", jsonData);

            // Validate required fields
            const isValid = jsonData.every((lead) =>
                requiredFields.every((field) =>
                    Object.prototype.hasOwnProperty.call(lead, field)
                )
            );

            if (!isValid) {
                alert("Excel file is missing required fields");
                return;
            }

            const dateFields = [
                "convertedDate",
                "date",
                "nextFollowup",
                "lostDate",
            ];

            const convertedLeads = jsonData.map((lead) => {

                const convertedLead = { ...lead };

                dateFields.forEach((field) => {

                    if (
                        convertedLead[field] !== undefined &&
                        convertedLead[field] !== "-"
                    ) {
                        convertedLead[field] =
                            excelDateToString(convertedLead[field]);
                    }

                });

                return {
                    ...convertedLead,
                    id: crypto.randomUUID(),
                    createdAt: new Date().toISOString(),
                };
            });

            console.log("Converted Leads:", convertedLeads);

            // Existing leads
            const existingLeads =
                JSON.parse(localStorage.getItem("leads")) || [];

            // Add imported leads
            const updatedLeads = [
                ...existingLeads,
                ...convertedLeads,
            ];

            // Save to localStorage
            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            );

            // Tell parent component
            if (onImportComplete) {
                onImportComplete(updatedLeads);
            }

            alert(`${convertedLeads.length} leads imported successfully!`);

            // Allow selecting same file again
            e.target.value = "";
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <input
            id="import-lead-file"
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileSelect}
            className="hidden"
        />
    );
};

export default ImportLead;