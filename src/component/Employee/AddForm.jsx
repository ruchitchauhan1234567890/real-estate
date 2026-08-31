import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { EmployeeContext } from "../../ContextAPI/EmployeeContext";
import { ThemeContext } from "../../ContextAPI/ThemeContext";
import Select from "react-select";

const AddForm = () => {

    const {
        open,
        setOpen,
        data,
        setData,
        setEditedEmp,
        editedEmp
    } = useContext(EmployeeContext);

    const { theme } = useContext(ThemeContext);

    const departmentOption = [
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" }
    ];

    const roleOption = [
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Sales Manager", label: "Sales Manager" },
        { value: "Digital Marketer", label: "Digital Marketer" },
        { value: "Marketing Executive", label: "Marketing Executive" },
        { value: "Support Executive", label: "Support Executive" }
    ];

    const statusOption = [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" }
    ];

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        date: "",
        department: "Sales",
        address: "",
        role: "Sales Executive",
        status: "Active",
        isAdmin: false,
        photo: ""
    });

    useEffect(() => {
        if (editedEmp) {
            setInputData(editedEmp);
        }
    }, [editedEmp]);

    const handleChange = (e) => {

        const {
            name,
            value,
            checked,
            files,
            type
        } = e.target;

        if (type === "file") {

            const file = files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {
                setInputData((prev) => ({
                    ...prev,
                    [name]: reader.result
                }));
            };

            reader.readAsDataURL(file);

            return;
        }

        setInputData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!inputData) return;

        const employee =
            JSON.parse(localStorage.getItem("employee")) || [];

        if (!editedEmp) {

            const employees = {
                ...inputData,
                id: crypto.randomUUID()
            };

            employee.push(employees);

            localStorage.setItem(
                "employee",
                JSON.stringify(employee)
            );

            setData(employee);

            setInputData({
                name: "",
                email: "",
                password: "",
                phone: "",
                date: "",
                department: "Sales",
                address: "",
                role: "Sales Executive",
                status: "Active",
                isAdmin: false,
                photo: ""
            });

            setEditedEmp(null);

        } else {

            const updateEmp = employee.map((emp) => {

                if (emp.id === editedEmp.id) {

                    return {
                        ...inputData,
                        id: editedEmp.id
                    };

                }

                return emp;
            });

            localStorage.setItem(
                "employee",
                JSON.stringify(updateEmp)
            );

            setData(updateEmp);

            setEditedEmp(null);
        }

        setOpen(false);
    };

    if (!open) return null;


    

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "36px",
            height: "36px",

            fontSize: "11px",

            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#ffffff",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : theme === "dark"
                        ? "#45455A"
                        : "#e5e7eb",

            color:
                theme === "dark"
                    ? "#ffffff"
                    : "#374151",

            boxShadow:
                state.isFocused
                    ? "0 0 0 1px #3b82f6"
                    : "none",

            borderRadius: "6px",

            "&:hover": {
                borderColor:
                    theme === "dark"
                        ? "#5B5B72"
                        : "#d1d5db"
            }
        }),


        valueContainer: (base) => ({
            ...base,
            padding: "0 10px"
        }),


        singleValue: (base) => ({
            ...base,
            color:
                theme === "dark"
                    ? "#f3f4f6"
                    : "#374151"
        }),


        indicatorsContainer: (base) => ({
            ...base,
            height: "36px"
        }),


        dropdownIndicator: (base) => ({
            ...base,
            color:
                theme === "dark"
                    ? "#9ca3af"
                    : "#6b7280"
        }),


        menu: (base) => ({
            ...base,

            zIndex: 100,

            backgroundColor:
                theme === "dark"
                    ? "#2A2A40"
                    : "#ffffff",

            border:
                theme === "dark"
                    ? "1px solid #45455A"
                    : "1px solid #e5e7eb"
        }),


        option: (base, state) => ({
            ...base,

            fontSize: "11px",
            padding: "8px 10px",

            backgroundColor:
                state.isSelected
                    ? "#eff6ff"
                    : state.isFocused
                        ? theme === "dark"
                            ? "#353548"
                            : "#f9fafb"
                        : theme === "dark"
                            ? "#2A2A40"
                            : "#ffffff",

            color:
                state.isSelected
                    ? "#2563eb"
                    : theme === "dark"
                        ? "#f3f4f6"
                        : "#374151",

            cursor: "pointer"
        })
    };


    return (
        <div className="fixed inset-0 z-50">


            <div
                onClick={() => {
                    setOpen(false);
                    setEditedEmp(null);
                }}
                className="
                    absolute
                    inset-0
                    bg-black/40
                    backdrop-blur-[1px]
                "
            />


            {/* ================= DRAWER ================= */}

            <div
                className="
                    absolute
                    right-0
                    top-0
                    h-full

                    w-full
                    sm:w-[420px]
                    lg:w-[440px]

                    max-w-full

                    bg-white
                    dark:bg-[#1F1F30]

                    shadow-2xl

                    flex
                    flex-col
                "
            >

                {/* ================= HEADER ================= */}

                <div
                    className="
                        shrink-0
                        flex
                        items-center
                        justify-between

                        px-4
                        sm:px-5

                        py-3
                        sm:py-4

                        border-b
                        border-gray-200
                        dark:border-[#353548]
                    "
                >

                    <div className="min-w-0 pr-3">

                        <h2
                            className="
                                text-sm
                                sm:text-base
                                font-semibold
                                text-gray-900
                                dark:text-white
                                truncate
                            "
                        >
                            {editedEmp
                                ? "Update Employee"
                                : "Create New Employee"
                            }
                        </h2>

                        <p
                            className="
                                text-[9px]
                                sm:text-[10px]
                                text-gray-500
                                dark:text-gray-400
                                mt-1
                                truncate
                            "
                        >
                            Add employee information and permissions
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            setEditedEmp(null);
                        }}
                        className="
                            shrink-0
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            rounded-md

                            text-gray-500
                            dark:text-gray-400

                            hover:bg-gray-100
                            dark:hover:bg-[#2A2A40]

                            hover:text-gray-800
                            dark:hover:text-white

                            transition
                        "
                    >
                        <IoClose size={20} />
                    </button>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-4
                        sm:px-5
                        py-4
                        sm:py-5
                    "
                >

                    {/* ================= BASIC INFORMATION ================= */}

                    <div className="mb-6">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                                mb-4
                            "
                        >
                            Basic Information
                        </h3>


                        {/* Name */}

                        <div className="mb-4">

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    dark:text-gray-300
                                    mb-1.5
                                "
                            >
                                Employee Name

                                <span className="text-red-500 ml-0.5">
                                    *
                                </span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                className="
                                    w-full
                                    h-9
                                    px-3
                                    text-[11px]

                                    bg-white
                                    dark:bg-[#2A2A40]

                                    border
                                    border-gray-200
                                    dark:border-[#45455A]

                                    rounded-md
                                    outline-none

                                    text-gray-700
                                    dark:text-gray-200

                                    placeholder:text-gray-400
                                    dark:placeholder:text-gray-500

                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />

                        </div>


                        {/* Email + Phone */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            "
                        >

                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={inputData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    className="
                                        w-full
                                        h-9
                                        px-3
                                        text-[11px]

                                        bg-white
                                        dark:bg-[#2A2A40]

                                        border
                                        border-gray-200
                                        dark:border-[#45455A]

                                        rounded-md
                                        outline-none

                                        text-gray-700
                                        dark:text-gray-200

                                        placeholder:text-gray-400
                                        dark:placeholder:text-gray-500

                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
                                    "
                                />

                            </div>


                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={inputData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="
                                        w-full
                                        h-9
                                        px-3
                                        text-[11px]

                                        bg-white
                                        dark:bg-[#2A2A40]

                                        border
                                        border-gray-200
                                        dark:border-[#45455A]

                                        rounded-md
                                        outline-none

                                        text-gray-700
                                        dark:text-gray-200

                                        placeholder:text-gray-400
                                        dark:placeholder:text-gray-500

                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= WORK INFORMATION ================= */}

                    <div className="mb-6">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                                mb-4
                            "
                        >
                            Work Information
                        </h3>


                        {/* Department + Role */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                                mb-4
                            "
                        >

                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Department
                                </label>

                                <Select
                                    options={departmentOption}
                                    value={departmentOption.find(
                                        option =>
                                            option.value ===
                                            inputData.department
                                    )}
                                    onChange={(selectOption) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            department:
                                                selectOption?.value || ""
                                        }))
                                    }
                                    styles={selectStyles}
                                    isSearchable={false}
                                />

                            </div>


                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Role
                                </label>

                                <Select
                                    options={roleOption}
                                    value={roleOption.find(
                                        option =>
                                            option.value ===
                                            inputData.role
                                    )}
                                    onChange={(selectOption) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            role:
                                                selectOption?.value || ""
                                        }))
                                    }
                                    styles={selectStyles}
                                    isSearchable={false}
                                />

                            </div>

                        </div>


                        {/* Status + Join Date */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            "
                        >

                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Status
                                </label>

                                <Select
                                    options={statusOption}
                                    value={statusOption.find(
                                        option =>
                                            option.value ===
                                            inputData.status
                                    )}
                                    onChange={(selectOption) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            status:
                                                selectOption?.value || ""
                                        }))
                                    }
                                    styles={selectStyles}
                                    isSearchable={false}
                                />

                            </div>


                            <div>

                                <label
                                    className="
                                        block
                                        text-[10px]
                                        font-medium
                                        text-gray-600
                                        dark:text-gray-300
                                        mb-1.5
                                    "
                                >
                                    Join Date
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={inputData.date}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-9
                                        px-3
                                        text-[11px]

                                        bg-white
                                        dark:bg-[#2A2A40]

                                        border
                                        border-gray-200
                                        dark:border-[#45455A]

                                        rounded-md
                                        outline-none

                                        text-gray-700
                                        dark:text-gray-200

                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= ACCOUNT INFORMATION ================= */}

                    <div className="mb-6">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                                mb-4
                            "
                        >
                            Account Information
                        </h3>


                        {/* Password */}

                        <div className="mb-4">

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    dark:text-gray-300
                                    mb-1.5
                                "
                            >
                                Password
                            </label>

                            <input
                                type="text"
                                name="password"
                                value={inputData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="
                                    w-full
                                    h-9
                                    px-3
                                    text-[11px]

                                    bg-white
                                    dark:bg-[#2A2A40]

                                    border
                                    border-gray-200
                                    dark:border-[#45455A]

                                    rounded-md
                                    outline-none

                                    text-gray-700
                                    dark:text-gray-200

                                    placeholder:text-gray-400
                                    dark:placeholder:text-gray-500

                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />

                        </div>


                        {/* Photo */}

                        <div>

                            <label
                                className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    dark:text-gray-300
                                    mb-1.5
                                "
                            >
                                Profile Photo
                            </label>

                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="
                                    w-full
                                    h-9
                                    text-[10px]

                                    bg-white
                                    dark:bg-[#2A2A40]

                                    border
                                    border-gray-200
                                    dark:border-[#45455A]

                                    rounded-md
                                    cursor-pointer

                                    file:border-0

                                    file:bg-gray-50
                                    dark:file:bg-[#353548]

                                    file:px-3
                                    file:h-full
                                    file:mr-3

                                    file:text-[10px]
                                    file:text-gray-600
                                    dark:file:text-gray-300

                                    overflow-hidden
                                "
                            />

                        </div>

                    </div>


                    {/* ================= PERMISSION ================= */}

                    <div className="mb-6">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                                mb-4
                            "
                        >
                            Permission
                        </h3>

                        <label
                            className="
                                flex
                                items-center
                                justify-between
                                gap-3
                                w-full
                                px-3
                                py-3

                                bg-white
                                dark:bg-[#2A2A40]

                                border
                                border-gray-200
                                dark:border-[#45455A]

                                rounded-md
                                cursor-pointer

                                hover:bg-gray-50
                                dark:hover:bg-[#353548]
                            "
                        >

                            <div className="min-w-0">

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        text-gray-800
                                        dark:text-gray-100
                                    "
                                >
                                    Administrator Access
                                </p>

                                <p
                                    className="
                                        text-[9px]
                                        text-gray-400
                                        dark:text-gray-500
                                        mt-0.5
                                    "
                                >
                                    Give this employee admin permissions
                                </p>

                            </div>


                            <div className="relative shrink-0">

                                <input
                                    type="checkbox"
                                    name="isAdmin"
                                    checked={inputData.isAdmin}
                                    onChange={handleChange}
                                    className="peer sr-only"
                                />

                                <div
                                    className="
                                        w-9
                                        h-5
                                        bg-gray-200
                                        dark:bg-[#45455A]
                                        rounded-full
                                        peer-checked:bg-blue-600
                                        transition
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        top-0.5
                                        left-0.5
                                        w-4
                                        h-4
                                        bg-white
                                        rounded-full
                                        shadow
                                        transition
                                        peer-checked:translate-x-4
                                    "
                                />

                            </div>

                        </label>

                    </div>


                    {/* ================= ADDRESS ================= */}

                    <div className="mb-5">

                        <h3
                            className="
                                text-[11px]
                                font-semibold
                                text-gray-900
                                dark:text-white
                                mb-3
                            "
                        >
                            Additional Information
                        </h3>

                        <label
                            className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                dark:text-gray-300
                                mb-1.5
                            "
                        >
                            Address
                        </label>

                        <textarea
                            rows="3"
                            name="address"
                            value={inputData.address}
                            onChange={handleChange}
                            placeholder="Enter employee address"
                            className="
                                w-full
                                px-3
                                py-2
                                text-[11px]

                                bg-white
                                dark:bg-[#2A2A40]

                                border
                                border-gray-200
                                dark:border-[#45455A]

                                rounded-md
                                resize-none
                                outline-none

                                text-gray-700
                                dark:text-gray-200

                                placeholder:text-gray-400
                                dark:placeholder:text-gray-500

                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                            "
                        />

                    </div>

                </form>


                {/* ================= FOOTER ================= */}

                <div
                    className="
                        shrink-0
                        flex
                        flex-col-reverse
                        sm:flex-row
                        justify-end
                        gap-2

                        px-4
                        sm:px-5
                        py-3

                        border-t
                        border-gray-200
                        dark:border-[#353548]

                        bg-white
                        dark:bg-[#1F1F30]
                    "
                >

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            setEditedEmp(null);
                        }}
                        className="
                            w-full
                            sm:w-auto
                            px-5
                            h-9
                            text-[10px]
                            font-medium

                            text-gray-600
                            dark:text-gray-300

                            border
                            border-gray-200
                            dark:border-[#45455A]

                            rounded-md

                            hover:bg-gray-50
                            dark:hover:bg-[#2A2A40]
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="
                            w-full
                            sm:w-auto
                            px-5
                            h-9
                            text-[10px]
                            font-medium
                            text-white
                            bg-blue-600
                            rounded-md
                            hover:bg-blue-700
                            shadow-sm
                        "
                    >
                        {editedEmp
                            ? "Update Employee"
                            : "Save Employee"
                        }
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AddForm;