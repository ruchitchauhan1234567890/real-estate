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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        role: "",
        status: "Active",
        date: "",
        address: "",
        password: ""
    });

    useEffect(() => {
        if (editedEmp) {
            setFormData({
                name: editedEmp.name || "",
                email: editedEmp.email || "",
                phone: editedEmp.phone || "",
                department: editedEmp.department || "",
                role: editedEmp.role || "",
                status: editedEmp.status || "Active",
                date: editedEmp.date || "",
                address: editedEmp.address || "",
                password: editedEmp.password || ""
            });
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                department: "",
                role: "",
                status: "Active",
                date: "",
                address: "",
                password: ""
            });
        }
    }, [editedEmp, open]);

    const departmentOptions = [
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" }
    ];

    const roleOptions = [
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Sales Manager", label: "Sales Manager" },
        { value: "Digital Marketer", label: "Digital Marketer" },
        { value: "Marketing Executive", label: "Marketing Executive" },
        { value: "Support Executive", label: "Support Executive" }
    ];

    const statusOptions = [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name, selected) => {
        setFormData((prev) => ({
            ...prev,
            [name]: selected?.value || ""
        }));
    };

    const handleClose = () => {
        setOpen(false);
        setEditedEmp(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ---------------------------------------
        // PUT YOUR EXISTING SAVE / UPDATE LOGIC
        // HERE
        // ---------------------------------------

        console.log(formData);

        // Example:
        // if (editedEmp) {
        //     update employee
        // } else {
        //     add employee
        // }

        handleClose();
    };

    if (!open) return null;

    return (
        <>
            {/* Background overlay */}
            <div
                onClick={handleClose}
                className="
                    fixed
                    inset-0
                    bg-black/20
                    z-40
                "
            />

            {/* Sidebar */}
            <div
                className="
                    fixed
                    top-0
                    right-0
                    z-50
                    h-screen
                    w-[430px]
                    max-w-[95vw]
                    bg-white
                    shadow-2xl
                    flex
                    flex-col
                    animate-[slideIn_.25s_ease-out]
                "
            >

                {/* ================= HEADER ================= */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-6
                        py-4
                        border-b
                        border-gray-200
                        shrink-0
                    "
                >
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {editedEmp ? "Edit Employee" : "Add New Employee"}
                        </h2>

                        <p className="text-xs text-gray-500 mt-1">
                            {editedEmp
                                ? "Update employee information"
                                : "Create a new employee profile"}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            rounded-full
                            text-gray-500
                            hover:bg-gray-100
                            hover:text-gray-800
                            transition
                        "
                    >
                        <IoClose size={21} />
                    </button>
                </div>


                {/* ================= FORM ================= */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-6
                        py-5
                    "
                >

                    {/* ================= BASIC INFORMATION ================= */}
                    <div className="mb-7">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Basic Information
                        </h3>


                        {/* Employee Name */}
                        <div className="mb-4">
                            <label className="form-label">
                                Employee Name <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                required
                                className="form-input"
                            />
                        </div>


                        {/* Email + Phone */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label className="form-label">
                                    Email <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">
                                    Phone <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone"
                                    required
                                    className="form-input"
                                />
                            </div>

                        </div>

                    </div>


                    {/* ================= WORK INFORMATION ================= */}
                    <div className="mb-7">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Work Information
                        </h3>


                        {/* Department + Role */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label className="form-label">
                                    Department <span className="text-red-500">*</span>
                                </label>

                                <Select
                                    options={departmentOptions}
                                    value={
                                        departmentOptions.find(
                                            (item) =>
                                                item.value === formData.department
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "department",
                                            selected
                                        )
                                    }
                                    placeholder="Select department"
                                    styles={selectStyles}
                                />
                            </div>

                            <div>
                                <label className="form-label">
                                    Role <span className="text-red-500">*</span>
                                </label>

                                <Select
                                    options={roleOptions}
                                    value={
                                        roleOptions.find(
                                            (item) =>
                                                item.value === formData.role
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "role",
                                            selected
                                        )
                                    }
                                    placeholder="Select role"
                                    styles={selectStyles}
                                />
                            </div>

                        </div>


                        {/* Status + Join Date */}
                        <div className="grid grid-cols-2 gap-3 mt-4">

                            <div>
                                <label className="form-label">
                                    Status
                                </label>

                                <Select
                                    options={statusOptions}
                                    value={
                                        statusOptions.find(
                                            (item) =>
                                                item.value === formData.status
                                        ) || null
                                    }
                                    onChange={(selected) =>
                                        handleSelectChange(
                                            "status",
                                            selected
                                        )
                                    }
                                    styles={selectStyles}
                                />
                            </div>

                            <div>
                                <label className="form-label">
                                    Join Date
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                        </div>

                    </div>


                    {/* ================= ACCOUNT INFORMATION ================= */}
                    <div className="mb-7">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Account Information
                        </h3>

                        <div>
                            <label className="form-label">
                                Password {!editedEmp && (
                                    <span className="text-red-500">*</span>
                                )}
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder={
                                    editedEmp
                                        ? "Enter new password"
                                        : "Create password"
                                }
                                required={!editedEmp}
                                className="form-input"
                            />
                        </div>

                    </div>


                    {/* ================= ADDITIONAL INFORMATION ================= */}
                    <div className="mb-5">

                        <h3 className="
                            text-sm
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Additional Information
                        </h3>

                        <div>
                            <label className="form-label">
                                Address
                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter employee address"
                                rows={4}
                                className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-md
                                    px-3
                                    py-2
                                    text-xs
                                    text-gray-700
                                    outline-none
                                    resize-none
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />
                        </div>

                    </div>

                </form>


                {/* ================= FOOTER ================= */}
                <div
                    className="
                        border-t
                        border-gray-200
                        bg-white
                        px-6
                        py-4
                        flex
                        justify-end
                        gap-3
                        shrink-0
                    "
                >

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            px-5
                            py-2
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-gray-600
                            text-xs
                            font-medium
                            hover:bg-gray-50
                            transition
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="
                            px-5
                            py-2
                            rounded-md
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            text-xs
                            font-medium
                            shadow-sm
                            transition
                        "
                    >
                        {editedEmp ? "Update Employee" : "Save Employee"}
                    </button>

                </div>

            </div>
        </>
    );
};


/* =========================================
   React Select Styling
========================================= */

const selectStyles = {
    control: (base, state) => ({
        ...base,
        minHeight: "38px",
        height: "38px",
        borderRadius: "6px",
        borderColor: state.isFocused
            ? "#3b82f6"
            : "#e5e7eb",
        boxShadow: state.isFocused
            ? "0 0 0 1px #3b82f6"
            : "none",
        fontSize: "12px",
        "&:hover": {
            borderColor: "#3b82f6"
        }
    }),

    valueContainer: (base) => ({
        ...base,
        padding: "0 10px"
    }),

    placeholder: (base) => ({
        ...base,
        color: "#9ca3af",
        fontSize: "12px"
    }),

    singleValue: (base) => ({
        ...base,
        fontSize: "12px",
        color: "#374151"
    }),

    option: (base, state) => ({
        ...base,
        fontSize: "12px",
        backgroundColor: state.isSelected
            ? "#2563eb"
            : state.isFocused
                ? "#eff6ff"
                : "white",
        color: state.isSelected
            ? "white"
            : "#374151"
    })
};

export default AddForm;