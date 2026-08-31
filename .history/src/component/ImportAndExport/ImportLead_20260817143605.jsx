import React from "react";
import * as XLSX from "xlsx";

const ImportLead = () => {
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
        const { files } = e.target;
        const file = files[0];

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

            console.log("Original data:", jsonData);

            // Validate required fields
            const isValid = jsonData.every((lead) =>
                requiredFields.every((field) =>
                    Object.prototype.hasOwnProperty.call(lead, field)
                )
            );

            console.log("valid:", isValid);

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
                        convertedLead[field] = excelDateToString(
                            convertedLead[field]
                        );
                    }
                });

                return {
                    ...convertedLead,
                    id: crypto.randomUUID(),
                    createdAt: new Date().toISOString(),
                };
            });

            console.log("Converted leads:", convertedLeads);

            // Existing leads
            const existingLeads =
                JSON.parse(localStorage.getItem("leads")) || [];

            // Add converted leads
            const updatedLeads = [
                ...existingLeads,
                ...convertedLeads,
            ];

            // Save
            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            );

            console.log("Saved leads:", updatedLeads);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <h1>Import Lead</h1>

            <input
                type="file"
                placeholder="select"
                accept=".xlsx,.xls"
                onChange={handleFileSelect}
            />
        </div>
    );
};

export default ImportLead;