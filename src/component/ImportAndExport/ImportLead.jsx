import React, { forwardRef } from "react";
import * as XLSX from "xlsx";

const ImportLead = forwardRef(({ onImportComplete }, ref) => {
    const requiredFields = ["name", "email", "phone"];

    const excelDateToString = (value) => {
        if (
            value === undefined ||
            value === null ||
            value === "" ||
            value === "-"
        ) {
            return value;
        }
       
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

        if (typeof value === "string") {
            const trimmedValue = value.trim();

            if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(trimmedValue)) {
                const [year, month, day] =
                    trimmedValue.split("-");

                return `${year}-${month.padStart(
                    2,
                    "0"
                )}-${day.padStart(2, "0")}`;
            }

         
            if (/^\d{2}-\d{1,2}-\d{1,2}$/.test(trimmedValue)) {
                const [year, month, day] =
                    trimmedValue.split("-");

                return `20${year}-${month.padStart(
                    2,
                    "0"
                )}-${day.padStart(2, "0")}`;
            }
          
            if (/^\d{1,2}\/\d{1,2}\/\d{2}$/.test(trimmedValue)) {
                const [day, month, year] =
                    trimmedValue.split("/");

                return `20${year}-${month.padStart(
                    2,
                    "0"
                )}-${day.padStart(2, "0")}`;
            }

         
            if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmedValue)) {
                const [day, month, year] =
                    trimmedValue.split("/");

                return `${year}-${month.padStart(
                    2,
                    "0"
                )}-${day.padStart(2, "0")}`;
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
                        raw: false,
                        defval: "",
                    }
                );

                console.log("Excel Data:", jsonData);

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


                const dateFields = [
                    "convertedDate",
                    "date",
                    "nextFollowup",
                    "lostDate",
                ];


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
                        createdAt: new Date().toISOString(),
                    };
                });

                console.log(
                    "Converted Leads:",
                    convertedLeads
                );


                const existingLeads =
                    JSON.parse(
                        localStorage.getItem("leads")
                    ) || [];

                const updatedLeads = [
                    ...existingLeads,
                    ...convertedLeads,
                ];

                localStorage.setItem(
                    "leads",
                    JSON.stringify(updatedLeads)
                );


                if (onImportComplete) {
                    onImportComplete(updatedLeads);
                }

                alert(
                    `${convertedLeads.length} leads imported successfully!`
                );


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