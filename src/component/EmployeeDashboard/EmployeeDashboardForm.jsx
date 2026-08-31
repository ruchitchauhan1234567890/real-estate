import React, { useContext } from "react"
import Select from "react-select"
import { ThemeContext } from "../../ContextAPI/ThemeContext"

const EmployeeDashboardForm = ({ selectEmp, setSelectEmp }) => {

    const { theme } = useContext(ThemeContext)

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []

    const employees = employee.filter((emp) => !emp.isAdmin)

    const options = employees.map((emp) => ({
        value: emp.name,
        label: emp.name
    }))

    return (
        <div className="
            flex
            items-center
            justify-between
            mb-2
        ">

            {/* Left Content */}

            <div>

                <p className="
                    text-[13px]
                    font-semibold
                    text-gray-900
                    dark:text-white
                    leading-tight
                ">
                    Employee Dashboard
                </p>

                <p className="
                    text-[9px]
                    text-gray-500
                    dark:text-gray-400
                    mt-0.5
                ">
                    View employee performance and their activities
                </p>

            </div>


            {/* Employee Select */}

            <div className="w-44">

                <Select
                    options={options}

                    value={
                        options.find(
                            (option) => option.value === selectEmp
                        ) || null
                    }

                    placeholder="Select Employee"

                    onChange={(selected) => {
                        setSelectEmp(selected?.value || "")
                    }}

                    isSearchable={false}

                    styles={{

                        /* ================= CONTROL ================= */

                        control: (base, state) => ({
                            ...base,

                            minHeight: "32px",
                            height: "32px",

                            borderRadius: "6px",

                            borderColor: state.isFocused
                                ? "#2563eb"
                                : theme === "dark"
                                    ? "#45455A"
                                    : "#e5e7eb",

                            boxShadow: state.isFocused
                                ? "0 0 0 1px #2563eb"
                                : "none",

                            fontSize: "10px",

                            backgroundColor:
                                theme === "dark"
                                    ? "#2A2A40"
                                    : "#fff",

                            cursor: "pointer",

                            "&:hover": {
                                borderColor:
                                    theme === "dark"
                                        ? "#55556B"
                                        : "#d1d5db"
                            }
                        }),


                        /* ================= VALUE ================= */

                        valueContainer: (base) => ({
                            ...base,
                            padding: "0 8px"
                        }),


                        /* ================= SELECTED VALUE ================= */

                        singleValue: (base) => ({
                            ...base,

                            fontSize: "10px",

                            color:
                                theme === "dark"
                                    ? "#e5e7eb"
                                    : "#374151"
                        }),


                        /* ================= PLACEHOLDER ================= */

                        placeholder: (base) => ({
                            ...base,

                            fontSize: "10px",

                            color: "#9ca3af"
                        }),


                        /* ================= INDICATORS ================= */

                        indicatorsContainer: (base) => ({
                            ...base,
                            height: "30px"
                        }),


                        dropdownIndicator: (base) => ({
                            ...base,

                            padding: "5px",

                            color:
                                theme === "dark"
                                    ? "#9ca3af"
                                    : "#6b7280"
                        }),


                        /* ================= MENU ================= */

                        menu: (base) => ({
                            ...base,

                            borderRadius: "6px",

                            overflow: "hidden",

                            fontSize: "10px",

                            zIndex: 50,

                            backgroundColor:
                                theme === "dark"
                                    ? "#2A2A40"
                                    : "#fff"
                        }),


                        /* ================= OPTIONS ================= */

                        option: (base, state) => ({
                            ...base,

                            fontSize: "10px",

                            padding: "6px 8px",

                            backgroundColor:
                                state.isSelected
                                    ? theme === "dark"
                                        ? "#2563eb"
                                        : "#eff6ff"

                                    : state.isFocused
                                        ? theme === "dark"
                                            ? "#353548"
                                            : "#f9fafb"

                                        : theme === "dark"
                                            ? "#2A2A40"
                                            : "#fff",

                            color:
                                state.isSelected
                                    ? "#fff"

                                    : theme === "dark"
                                        ? "#e5e7eb"
                                        : "#374151",

                            cursor: "pointer"
                        })

                    }}
                />

            </div>

        </div>
    )
}

export default EmployeeDashboardForm