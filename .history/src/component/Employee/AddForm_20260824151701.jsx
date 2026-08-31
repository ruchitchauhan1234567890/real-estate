import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Select from "react-select";
import { EmployeeContext } from "../../ContextAPI/EmployeeContext";

const AddForm = () => {

    const {
        open,
        setOpen,
        data,
        setData,
        setEditedEmp,
        editedEmp
    } = useContext(EmployeeContext);

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
        department: "",
        address: "",
        role: "",
        status: "Active",
        isAdmin: false,
        photo: ""
    });

    // =========================
    // EDIT EMPLOYEE
    // =========================

    useEffect(() => {

        if (editedEmp) {

            setInputData({
                name: editedEmp.name || "",
                email: editedEmp.email || "",
                password: editedEmp.password || "",
                phone: editedEmp.phone || "",
                date: editedEmp.date || "",
                department: editedEmp.department || "",
                address: editedEmp.address || "",
                role: editedEmp.role || "",
                status: editedEmp.status || "Active",
                isAdmin: editedEmp.isAdmin || false,
                photo: editedEmp.photo || ""
            });

        } else {

            setInputData({
                name: "",
                email: "",
                password: "",
                phone: "",
                date: "",
                department: "",
                address: "",
                role: "",
                status: "Active",
                isAdmin: false,
                photo: ""
            });

        }

    }, [editedEmp, open]);


    // =========================
    // INPUT CHANGE
    // =========================

    const handleChange = (e) => {

        const {
            name,
            value,
            checked,
            files,
            type
        } = e.target;

        // Profile image
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
            [name]:
                type === "checkbox"
                    ? checked
                    : value
        }));
    };


    // =========================
    // SAVE / UPDATE
    // =========================

    const handleSubmit = (e) => {

        e.preventDefault();

        const employee =
            JSON.parse(
                localStorage.getItem("employee")
            ) || [];


        // ADD
        if (!editedEmp) {

            const newEmployee = {
                ...inputData,
                id: crypto.randomUUID()
            };

            const updatedEmployees = [
                ...employee,
                newEmployee
            ];

            localStorage.setItem(
                "employee",
                JSON.stringify(updatedEmployees)
            );

            setData(updatedEmployees);

        }

        // UPDATE
        else {

            const updatedEmployees =
                employee.map((emp) => {

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
                JSON.stringify(updatedEmployees)
            );

            setData(updatedEmployees);
        }


        setEditedEmp(null);
        setOpen(false);
    };


    // =========================
    // CLOSE
    // =========================

    const closeForm = () => {

        setOpen(false);
        setEditedEmp(null);

    };


    if (!open) return null;


    // =========================
    // REACT SELECT STYLE
    // =========================

    const selectStyles = {

        control: (base, state) => ({
            ...base,

            minHeight: "36px",
            height: "36px",

            borderRadius: "6px",

            borderColor:
                state.isFocused
                    ? "#3b82f6"
                    : "#e5e7eb",

            boxShadow:
                state.isFocused
                    ? "0 0 0 2px rgba(59,130,246,0.08)"
                    : "none",

            fontSize: "11px",

            "&:hover": {
                borderColor: "#d1d5db"
            }
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 10px"
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "34px"
        }),

        placeholder: (base) => ({
            ...base,
            color: "#9ca3af"
        }),

        singleValue: (base) => ({
            ...base,
            color: "#374151"
        }),

        menu: (base) => ({
            ...base,
            fontSize: "11px",
            zIndex: 9999
        })
    };


    return (

        <div className="
            fixed
            inset-0
            z-50
            bg-black/30
        ">

            {/* ================= SIDE DRAWER ================= */}

            <div className="
                fixed
                top-0
                right-0
                h-full
                w-[380px]
                max-w-[90vw]
                bg-white
                shadow-2xl
                flex
                flex-col
            ">

                {/* ================= HEADER ================= */}

                <div className="
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    border-b
                    border-gray-100
                    shrink-0
                ">

                    <div>

                        <h2 className="
                            text-sm
                            font-bold
                            text-gray-900
                        ">
                            {editedEmp
                                ? "Update Employee"
                                : "Create New Employee"}
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-400
                            mt-1
                        ">
                            Add employee information and account details
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={closeForm}
                        className="
                            w-7
                            h-7
                            flex
                            items-center
                            justify-center
                            rounded-md
                            text-gray-500
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <IoClose size={18} />
                    </button>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-5
                        py-4
                    "
                >

                    {/* ================= BASIC INFORMATION ================= */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-bold
                            text-gray-900
                            mb-4
                        ">
                            Basic Information
                        </h3>


                        <div className="
                            grid
                            grid-cols-2
                            gap-x-3
                            gap-y-3
                        ">

                            {/* NAME */}

                            <div className="col-span-2">

                                <label className="crm-label">
                                    Employee Name
                                    <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={inputData.name}
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                    className="crm-input"
                                    required
                                />

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label className="crm-label">
                                    Email
                                    <span>*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={inputData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    className="crm-input"
                                    required
                                />

                            </div>


                            {/* PHONE */}

                            <div>

                                <label className="crm-label">
                                    Phone
                                    <span>*</span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={inputData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone"
                                    className="crm-input"
                                    required
                                />

                            </div>


                            {/* PASSWORD */}

                            <div className="col-span-2">

                                <label className="crm-label">
                                    Password
                                    <span>*</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={inputData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    className="crm-input"
                                    required={!editedEmp}
                                />

                            </div>


                            {/* DEPARTMENT */}

                            <div>

                                <label className="crm-label">
                                    Department
                                    <span>*</span>
                                </label>

                                <Select
                                    options={departmentOption}
                                    placeholder="Select department"
                                    value={
                                        departmentOption.find(
                                            item =>
                                                item.value ===
                                                inputData.department
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            department:
                                                option?.value || ""
                                        }))
                                    }
                                    styles={selectStyles}
                                />

                            </div>


                            {/* ROLE */}

                            <div>

                                <label className="crm-label">
                                    Role
                                    <span>*</span>
                                </label>

                                <Select
                                    options={roleOption}
                                    placeholder="Select role"
                                    value={
                                        roleOption.find(
                                            item =>
                                                item.value ===
                                                inputData.role
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            role:
                                                option?.value || ""
                                        }))
                                    }
                                    styles={selectStyles}
                                />

                            </div>


                            {/* JOIN DATE */}

                            <div>

                                <label className="crm-label">
                                    Join Date
                                    <span>*</span>
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={inputData.date}
                                    onChange={handleChange}
                                    className="crm-input"
                                    required
                                />

                            </div>


                            {/* STATUS */}

                            <div>

                                <label className="crm-label">
                                    Status
                                </label>

                                <Select
                                    options={statusOption}
                                    value={
                                        statusOption.find(
                                            item =>
                                                item.value ===
                                                inputData.status
                                        ) || null
                                    }
                                    onChange={(option) =>
                                        setInputData(prev => ({
                                            ...prev,
                                            status:
                                                option?.value || "Active"
                                        }))
                                    }
                                    styles={selectStyles}
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= CONTACT ================= */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-bold
                            text-gray-900
                            mb-4
                        ">
                            Contact Information
                        </h3>


                        <label className="crm-label">
                            Address
                        </label>

                        <textarea
                            name="address"
                            value={inputData.address}
                            onChange={handleChange}
                            placeholder="Enter employee address"
                            rows={3}
                            className="
                                w-full
                                mt-1.5
                                border
                                border-gray-200
                                rounded-md
                                px-3
                                py-2
                                text-[11px]
                                text-gray-700
                                placeholder:text-gray-400
                                outline-none
                                resize-none
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                    </div>


                    {/* ================= PROFILE & ACCESS ================= */}

                    <div className="mb-2">

                        <h3 className="
                            text-[11px]
                            font-bold
                            text-gray-900
                            mb-4
                        ">
                            Profile & Access
                        </h3>


                        {/* PROFILE PHOTO */}

                        <div className="mb-3">

                            <label className="crm-label">
                                Profile Photo
                            </label>

                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="
                                    w-full
                                    mt-1.5
                                    border
                                    border-gray-200
                                    rounded-md
                                    px-2
                                    py-1.5
                                    text-[10px]
                                    text-gray-500
                                    file:mr-2
                                    file:border-0
                                    file:bg-gray-100
                                    file:px-2
                                    file:py-1
                                    file:rounded
                                    file:text-[9px]
                                    file:font-medium
                                "
                            />

                        </div>


                        {/* ADMIN ACCESS */}

                        <div className="
                            flex
                            items-center
                            justify-between
                            border
                            border-gray-200
                            rounded-md
                            px-3
                            py-2.5
                        ">

                            <div>

                                <p className="
                                    text-[11px]
                                    font-medium
                                    text-gray-700
                                ">
                                    Admin Access
                                </p>

                                <p className="
                                    text-[9px]
                                    text-gray-400
                                    mt-0.5
                                ">
                                    Give this employee admin permissions
                                </p>

                            </div>


                            <input
                                type="checkbox"
                                name="isAdmin"
                                checked={inputData.isAdmin}
                                onChange={handleChange}
                                className="
                                    w-4
                                    h-4
                                    accent-blue-600
                                    cursor-pointer
                                "
                            />

                        </div>

                    </div>

                </form>


                {/* ================= FOOTER ================= */}

                <div className="
                    flex
                    items-center
                    justify-end
                    gap-2
                    px-5
                    py-3
                    border-t
                    border-gray-100
                    bg-white
                    shrink-0
                ">

                    <button
                        type="button"
                        onClick={closeForm}
                        className="
                            px-5
                            py-1.5
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-[10px]
                            font-medium
                            text-gray-600
                            hover:bg-gray-50
                        "
                    >
                        Cancel
                    </button>


                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="
                            px-5
                            py-1.5
                            rounded-md
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            text-[10px]
                            font-medium
                            shadow-sm
                        "
                    >
                        {editedEmp
                            ? "Update Employee"
                            : "Save Employee"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default AddForm;