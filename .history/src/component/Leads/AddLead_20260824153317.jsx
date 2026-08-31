import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { EmployeeContext } from "../../ContextAPI/EmployeeContext";
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

        setOpen(!open);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">

            {/* Overlay */}
            <div
                onClick={() => {
                    setOpen(false);
                    setEditedEmp(null);
                }}
                className="
                    absolute
                    inset-0
                    bg-black/30
                "
            />

            {/* SIDE DRAWER */}
            <div
                className="
                    absolute
                    right-0
                    top-0
                    h-full
                    w-[420px]
                    max-w-[90vw]
                    bg-white
                    shadow-2xl
                    flex
                    flex-col
                "
            >

                {/* ================= HEADER ================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        border-b
                        border-gray-200
                        shrink-0
                    "
                >

                    <div>
                        <h2 className="
                            text-base
                            font-semibold
                            text-gray-900
                        ">
                            {editedEmp
                                ? "Update Employee"
                                : "Create New Employee"
                            }
                        </h2>

                        <p className="
                            text-[10px]
                            text-gray-500
                            mt-1
                        ">
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
                            p-1
                            rounded
                            text-gray-500
                            hover:bg-gray-100
                            hover:text-gray-800
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
                        px-5
                        py-5
                    "
                >

                    {/* BASIC INFORMATION */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Basic Information
                        </h3>


                        {/* NAME */}

                        <div className="mb-4">

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
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
                                    border
                                    border-gray-200
                                    rounded-md
                                    outline-none
                                    text-gray-700
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />

                        </div>


                        {/* EMAIL + PHONE */}

                        <div className="grid grid-cols-2 gap-3">

                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
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
                                        border
                                        border-gray-200
                                        rounded-md
                                        outline-none
                                        placeholder:text-gray-400
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
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
                                    Phone
                                </label>

                                <input
                                    type="number"
                                    name="phone"
                                    value={inputData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="
                                        w-full
                                        h-9
                                        px-3
                                        text-[11px]
                                        border
                                        border-gray-200
                                        rounded-md
                                        outline-none
                                        placeholder:text-gray-400
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* WORK INFORMATION */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Work Information
                        </h3>


                        {/* DEPARTMENT + ROLE */}

                        <div className="grid grid-cols-2 gap-3 mb-4">

                            <div>

                                <label className="
                                    block
                                    text-[10px]
                                    font-medium
                                    text-gray-600
                                    mb-1.5
                                ">
                                    Department
                                </label>

                                <Select
                                    options={departmentOption}
                                    value={
                                        departmentOption.find(
                                            option =>
                                                option.value ===
                                                inputData.department
                                        )
                                    }
                                    onChange={(selectOption) =>
                                        setInputData((prev) => ({
                                            ...prev,
                                            department:
                                                selectOption.value
                                        }))
                                    }
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            fontSize: "11px",
                                            borderColor: "#e5e7eb",
                                            boxShadow: "none"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            fontSize: "11px"
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
                                </label>

                                <Select
                                    options={roleOption}
                                    value={
                                        roleOption.find(
                                            option =>
                                                option.value ===
                                                inputData.role
                                        )
                                    }
                                    onChange={(selectOption) =>
                                        setInputData((prev) => ({
                                            ...prev,
                                            role:
                                                selectOption.value
                                        }))
                                    }
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            fontSize: "11px",
                                            borderColor: "#e5e7eb",
                                            boxShadow: "none"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            fontSize: "11px"
                                        })
                                    }}
                                />

                            </div>

                        </div>


                        {/* STATUS + JOIN DATE */}

                        <div className="grid grid-cols-2 gap-3">

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
                                    options={statusOption}
                                    value={
                                        statusOption.find(
                                            option =>
                                                option.value ===
                                                inputData.status
                                        )
                                    }
                                    onChange={(selectOption) =>
                                        setInputData((prev) => ({
                                            ...prev,
                                            status:
                                                selectOption.value
                                        }))
                                    }
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            minHeight: "36px",
                                            height: "36px",
                                            fontSize: "11px",
                                            borderColor: "#e5e7eb",
                                            boxShadow: "none"
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: "0 10px"
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: "36px"
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            fontSize: "11px"
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
                                        border
                                        border-gray-200
                                        rounded-md
                                        outline-none
                                        focus:border-blue-500
                                        focus:ring-1
                                        focus:ring-blue-500
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* ACCOUNT INFORMATION */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Account Information
                        </h3>


                        {/* PASSWORD */}

                        <div className="mb-4">

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
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
                                    border
                                    border-gray-200
                                    rounded-md
                                    outline-none
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-1
                                    focus:ring-blue-500
                                "
                            />

                        </div>


                        {/* PHOTO */}

                        <div>

                            <label className="
                                block
                                text-[10px]
                                font-medium
                                text-gray-600
                                mb-1.5
                            ">
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
                                    border
                                    border-gray-200
                                    rounded-md
                                    cursor-pointer
                                    file:border-0
                                    file:bg-gray-50
                                    file:px-3
                                    file:h-full
                                    file:mr-3
                                    file:text-[10px]
                                    file:text-gray-600
                                "
                            />

                        </div>

                    </div>


                    {/* PERMISSION */}

                    <div className="mb-6">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-4
                        ">
                            Permission
                        </h3>

                        <label
                            className="
                                flex
                                items-center
                                justify-between
                                w-full
                                px-3
                                py-3
                                border
                                border-gray-200
                                rounded-md
                                cursor-pointer
                                hover:bg-gray-50
                            "
                        >

                            <div>

                                <p className="
                                    text-[11px]
                                    font-medium
                                    text-gray-800
                                ">
                                    Administrator Access
                                </p>

                                <p className="
                                    text-[9px]
                                    text-gray-400
                                    mt-0.5
                                ">
                                    Give this employee admin permissions
                                </p>

                            </div>

                            <div className="relative">

                                <input
                                    type="checkbox"
                                    name="isAdmin"
                                    checked={inputData.isAdmin}
                                    onChange={handleChange}
                                    className="
                                        peer
                                        sr-only
                                    "
                                />

                                <div
                                    className="
                                        w-9
                                        h-5
                                        bg-gray-200
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


                    {/* ADDRESS */}

                    <div className="mb-5">

                        <h3 className="
                            text-[11px]
                            font-semibold
                            text-gray-900
                            mb-3
                        ">
                            Additional Information
                        </h3>

                        <label className="
                            block
                            text-[10px]
                            font-medium
                            text-gray-600
                            mb-1.5
                        ">
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
                                border
                                border-gray-200
                                rounded-md
                                resize-none
                                outline-none
                                placeholder:text-gray-400
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
                        justify-end
                        gap-2
                        px-5
                        py-3
                        border-t
                        border-gray-200
                        bg-white
                    "
                >

                    <button
                        type="button"
                        onClick={() => {
                            setOpen(false);
                            setEditedEmp(null);
                        }}
                        className="
                            px-5
                            h-8
                            text-[10px]
                            font-medium
                            text-gray-600
                            border
                            border-gray-200
                            rounded-md
                            hover:bg-gray-50
                        "
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="
                            px-5
                            h-8
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