import React, { forwardRef } from "react";
import * as XLSX from "xlsx";

const ImportLead = forwardRef(({ onImportComplete }, ref) => {

    const requiredFields = ["name", "email", "phone"];

   const excelDateToString = (value) => {
    if (!value || value === "-") {
        return value;
    }

    // Excel serial number
    if (typeof value === "number") {
        const date = XLSX.SSF.parse_date_code(value);

        if (!date) {
            return value;
        }

        const day = String(date.d).padStart(2, "0");
        const month = String(date.m).padStart(2, "0");
        const year = date.y;

        return `${year}-${month}-${day}`;
    }

    // Excel/string date: 12/8/2026
    if (typeof value === "string") {
        const parts = value.split("/");

        if (parts.length === 3) {
            const [day, month, year] = parts;

            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        }
    }

    return value;
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


            // Date fields
            const dateFields = [
                "convertedDate",
                "date",
                "nextFollowup",
                "lostDate",
            ];


            // Convert leads
            const convertedLeads = jsonData.map((lead) => {

                const convertedLead = { ...lead };


                dateFields.forEach((field) => {

                    if (convertedLead[field] !== undefined) {

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


            // Updated leads
            const updatedLeads = [
                ...existingLeads,
                ...convertedLeads,
            ];


            // Save
            localStorage.setItem(
                "leads",
                JSON.stringify(updatedLeads)
            );


            // Send updated data to parent
            if (onImportComplete) {
                onImportComplete(updatedLeads);
            }


            alert(
                `${convertedLeads.length} leads imported successfully!`
            );


            // Same file again select karne ke liye
            e.target.value = "";
        };


        reader.readAsArrayBuffer(file);
    };


    return (
        <input
            ref={ref}
            id="import-lead-file"
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileSelect}
            className="hidden"
        />
    );
});


export default ImportLead;