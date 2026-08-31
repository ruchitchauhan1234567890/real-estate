import React from "react"
import Select from "react-select"

const EmployeeDashboardForm = ({ selectEmp, setSelectEmp }) => {

    const employee =
        JSON.parse(localStorage.getItem("employee")) || []

    const employees = employee.filter((emp) => !emp.isAdmin)

    const options = employees.map((emp) => ({
        value: emp.name,
        label: emp.name
    }))

    return (
        <div className="flex items-center justify-between mb-2">

            {/* Left Content */}
            <div>
                <p className="
                    text-[13px]
                    font-semibold
                    text-gray-900
                    leading-tight
                ">
                    Employee Dashboard
                </p>

                <p className="
                    text-[9px]
                    text-gray-500
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

                        control: (base, state) => ({
                            ...base,
                            minHeight: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            borderColor: state.isFocused
                                ? "#2563eb"
                                : "#e5e7eb",
                            boxShadow: state.isFocused
                                ? "0 0 0 1px #2563eb"
                                : "none",
                            fontSize: "10px",
                            backgroundColor: "#fff",
                            cursor: "pointer"
                        }),

                        valueContainer: (base) => ({
                            ...base,
                            padding: "0 8px"
                        }),

                        singleValue: (base) => ({
                            ...base,
                            fontSize: "10px",
                            color: "#374151"
                        }),

                        placeholder: (base) => ({
                            ...base,
                            fontSize: "10px",
                            color: "#9ca3af"
                        }),

                        indicatorsContainer: (base) => ({
                            ...base,
                            height: "30px"
                        }),

                        dropdownIndicator: (base) => ({
                            ...base,
                            padding: "5px",
                            color: "#6b7280"
                        }),

                        menu: (base) => ({
                            ...base,
                            borderRadius: "6px",
                            overflow: "hidden",
                            fontSize: "10px",
                            zIndex: 50
                        }),

                        option: (base, state) => ({
                            ...base,
                            fontSize: "10px",
                            padding: "6px 8px",
                            backgroundColor: state.isSelected
                                ? "#eff6ff"
                                : state.isFocused
                                    ? "#f9fafb"
                                    : "#fff",
                            color: state.isSelected
                                ? "#2563eb"
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