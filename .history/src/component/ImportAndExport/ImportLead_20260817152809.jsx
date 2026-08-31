import React, { forwardRef } from "react";
import * as XLSX from "xlsx";

const ImportLead = forwardRef(({ onImportComplete }, ref) => {
    const requiredFields = ["name", "email", "phone"];

    // Convert Excel date into Lead Creation format: YYYY-MM-DD
    const excelDateToString = (value) => {
        if (
            value === undefined ||
            value === null ||
            value === "" ||
            value === "-"
        ) {
            return value;
        }

        // Excel serial date
        if (typeof value === "number") {
            const date = XLSX.SSF.parse_date_code(value);

            if (!date) {
                return value;
            }

            const year = String(date.y).padStart(4, "0");
            const month = String(date.m).padStart(2, "0");
            const day = String(date.d).padStart(2, "0");

            return `${year}-${month}-${day}`;
        }

        // String date
        if (typeof value === "string") {
            const trimmedValue = value.trim();

            // Already YYYY-MM-DD
            if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(trimmedValue)) {
                const [year, month, day] = trimmedValue.split("-");

                return `${year}-${month.padStart(2, "0")}-${day.padStart(
                    2,
                    "0"
                )}`;
            }

            // YY-MM-DD -> YYYY-MM-DD
            // Example: 26-08-12 -> 2026-08-12
            if (/^\d{2}-\d{2}-\d{2}$/.test(trimmedValue)) {
                const [year, month, day] = trimmedValue.split("-");

                return `20${year}-${month.padStart(2, "0")}-${day.padStart(
                    2,
                    "0"
                )}`;
            }

            // DD/MM/YYYY -> YYYY-MM-DD
            // Example: 12/08/2026 -> 2026-08-12
            if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmedValue)) {
                const [day, month, year] = trimmedValue.split("/");

                return `${year}-${month.padStart(2, "0")}-${day.padStart(
                    2,
                    "0"
                )}`;
            }
        }

        return value;
    };

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = event.target.result;

                const workBook = XLSX.read(data, {
                    type: "array",
                });

                const sheetName = workBook.SheetNames[0];
                const worksheet = workBook.Sheets[sheetName];


                const jsonData = XLSX.utils.sheet_to_json(
                    worksheet,
                    {
                        raw: true,
                        defval: "",
                    }
                );

                console.log("Excel Data:", jsonData);

                // -----------------------------
                // Validate required fields
                // -----------------------------

                const isValid = jsonData.every((lead) =>
                    requiredFields.every(
                        (field) =>
                            Object.prototype.hasOwnProperty.call(
                                lead,
                                field
                            ) &&
                            lead[field] !== ""
                    )
                );

                if (!isValid) {
                    alert(
                        "Excel file is missing required fields: name, email, phone"
                    );
                    return;
                }

                // -----------------------------
                // Date fields
                // -----------------------------

                const dateFields = [
                    "convertedDate",
                    "date",
                    "nextFollowup",
                    "lostDate",
                ];

                // -----------------------------
                // Convert leads
                // -----------------------------

                const convertedLeads = jsonData.map((lead) => {
                    const convertedLead = {
                        ...lead,
                    };

                    dateFields.forEach((field) => {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                convertedLead,
                                field
                            )
                        ) {
                            convertedLead[field] =
                                excelDateToString(
                                    convertedLead[field]
                                );
                        }
                    });

                    return {
                        ...convertedLead,
                        id: crypto.randomUUID(),
                        createdAt:
                            new Date().toISOString(),
                    };
                });

                console.log(
                    "Converted Leads:",
                    convertedLeads
                );

                // -----------------------------
                // Existing leads
                // -----------------------------

                const existingLeads =
                    JSON.parse(
                        localStorage.getItem("leads")
                    ) || [];

                // -----------------------------
                // Merge
                // -----------------------------

                const updatedLeads = [
                    ...existingLeads,
                    ...convertedLeads,
                ];

                // -----------------------------
                // Save
                // -----------------------------

                localStorage.setItem(
                    "leads",
                    JSON.stringify(updatedLeads)
                );

                // -----------------------------
                // Update React state
                // -----------------------------

                if (onImportComplete) {
                    onImportComplete(updatedLeads);
                }

                alert(
                    `${convertedLeads.length} leads imported successfully!`
                );

                // Same file again select kar sakte ho
                e.target.value = "";
            } catch (error) {
                console.error(
                    "Excel import error:",
                    error
                );

                alert(
                    "Something went wrong while importing the Excel file."
                );

                e.target.value = "";
            }
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