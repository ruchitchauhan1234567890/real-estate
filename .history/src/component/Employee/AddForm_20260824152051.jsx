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
    });

    const departmentOptions = [
        { value: "Sales", label: "Sales" },
        { value: "Marketing", label: "Marketing" },
        { value: "Support", label: "Support" },
    ];

    const roleOptions = [
        { value: "Sales Executive", label: "Sales Executive" },
        { value: "Sales Manager", label: "Sales Manager" },
        { value: "Digital Marketer", label: "Digital Marketer" },
        { value: "Marketing Executive", label: "Marketing Executive" },
        { value: "Support Executive", label: "Support Executive" },
    ];

    const statusOptions = [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
    ];

    // Edit employee
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
            });
        }
    }, [editedEmp]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ----------------------------------
        // PUT YOUR EXISTING SAVE/UPDATE LOGIC
        // HERE
        // ----------------------------------

        console.log(formData);
    };

    const handleClose = () => {
        setOpen(false);
        setEditedEmp(null);

        setFormData({
            name: "",
            email: "",
            phone: "",
            department: "",
            role: "",
            status: "Active",
            date: "",
        });
    };

    if (!open) return null;

    return (
        <>
            {/* Background Overlay */}
            <div
                onClick={handleClose}
                className="
                    fixed
                    inset-0
                    bg-black/20
                    z-40
                "
            />

            {/* Right Sidebar */}
            <div
                className="
                    fixed
                    top-0
                    right-0
                    z-50
                    h-screen
                    w-[390px]
                    bg-white
                    shadow-2xl
                    flex
                    flex-col
                "
            >

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
                            text-[15px]
                            font-semibold
                            text-gray-900
                        ">
                            {editedEmp
                                ? "Edit Employee"
                                : "Create New Employee"
                            }
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-400
                            mt-0.5
                        ">
                            Add employee information and details
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            text-gray-500
                            hover:text-gray-900
                            transition
                        "
                    >
                        <IoClose size={19} />
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
                    <div className="mb-5">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Basic Information
                        </h3>


                        {/* Employee Name */}
                        <div className="mb-3">

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
                                Employee Name
                                <span className="text-red-500 ml-0.5">*</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                className="
                                    w-full
                                    h-[36px]
                                    px-3
                                    border
                                    border-gray-200
                                    rounded-md
                                    text-[11px]
                                    text-gray-700
                                    outline-none
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Email */}
                        <div className="mb-3">

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
                                Email
                                <span className="text-red-500 ml-0.5">*</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                className="
                                    w-full
                                    h-[36px]
                                    px-3
                                    border
                                    border-gray-200
                                    rounded-md
                                    text-[11px]
                                    text-gray-700
                                    outline-none
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Phone */}
                        <div className="mb-3">

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
                                Phone Number
                                <span className="text-red-500 ml-0.5">*</span>
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                className="
                                    w-full
                                    h-[36px]
                                    px-3
                                    border
                                    border-gray-200
                                    rounded-md
                                    text-[11px]
                                    text-gray-700
                                    outline-none
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* Department + Role */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
                                    Department
                                    <span className="text-red-500 ml-0.5">*</span>
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
                                        setFormData((prev) => ({
                                            ...prev,
                                            department: selected?.value || ""
                                        }))
                                    }
                                    placeholder="Select department"
                                    className="text-[11px]"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            borderColor: "#e5e7eb",
                                            borderRadius: "6px",
                                            boxShadow: "none",
                                            fontSize: "11px"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        })
                                    }}
                                />

                            </div>


                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
                                    Role
                                    <span className="text-red-500 ml-0.5">*</span>
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
                                        setFormData((prev) => ({
                                            ...prev,
                                            role: selected?.value || ""
                                        }))
                                    }
                                    placeholder="Select role"
                                    className="text-[11px]"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            borderColor: "#e5e7eb",
                                            borderRadius: "6px",
                                            boxShadow: "none",
                                            fontSize: "11px"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        })
                                    }}
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= EMPLOYEE DETAILS ================= */}
                    <div className="mb-5">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Employee Details
                        </h3>


                        {/* Join Date + Status */}
                        <div className="grid grid-cols-2 gap-3">

                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
                                    Join Date
                                    <span className="text-red-500 ml-0.5">*</span>
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-[36px]
                                        px-3
                                        border
                                        border-gray-200
                                        rounded-md
                                        text-[11px]
                                        text-gray-600
                                        outline-none
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-100
                                    "
                                />

                            </div>


                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
                                    Status
                                </label>

                                <Select
                                    options={statusOptions}
                                    value={statusOptions.find(
                                        (item) =>
                                            item.value === formData.status
                                    )}
                                    onChange={(selected) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            status: selected?.value || "Active"
                                        }))
                                    }
                                    className="text-[11px]"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            borderColor: "#e5e7eb",
                                            borderRadius: "6px",
                                            boxShadow: "none",
                                            fontSize: "11px"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        })
                                    }}
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================= ADDITIONAL INFORMATION ================= */}
                    <div className="mb-4">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Additional Information
                        </h3>


                        <div>

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
                                Notes
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Enter additional information"
                                className="
                                    w-full
                                    px-3
                                    py-2.5
                                    border
                                    border-gray-200
                                    rounded-md
                                    text-[11px]
                                    text-gray-700
                                    outline-none
                                    resize-none
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-100
                                "
                            />

                        </div>
                        

                    </div>

                    <div className="mb-4">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Permission
                        </h3>


                        <div>
                            <label>is Admin</label>   
                        </div>
                        

                    </div>
                    

                </form>


                {/* ================= FOOTER ================= */}
                <div className="
                    shrink-0
                    border-t
                    border-gray-100
                    px-5
                    py-3
                    bg-white
                    flex
                    justify-end
                    gap-2
                ">

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            h-[34px]
                            px-5
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            text-[10px]
                            font-medium
                            text-gray-600
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
                            h-[34px]
                            px-6
                            rounded-md
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            text-[10px]
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

export default AddForm;