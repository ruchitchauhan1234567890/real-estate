import React, { useEffect, useId, useState } from "react";
import { IoClose } from "react-icons/io5";

const AddForm = ({ open, setOpen, data, setData,setEditedEmp,editedEmp }) => {

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
    })

    useEffect(() => {
        if(editedEmp) {
            setInputData(editedEmp)
        }
    },[editedEmp])
    console.log(inputData)
    console.log(editedEmp)

    const handleChange = (e) => {
        console.log(e)
        const { name, value, checked, type } = e.target
        console.log(checked)
        setInputData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputData) return
        const employee = JSON.parse(localStorage.getItem("employee")) || [];
        const employees = { ...inputData, id: crypto.randomUUID() }
        employee.push(employees)
        localStorage.setItem("employee", JSON.stringify(employee));
        setData(employee)
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
            isAdmin: false
        })
        setOpen(!open)
    }
    console.log(data)

    if (!open) return null;

    console.log(data)

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full  max-w-5xl rounded-lg shadow-xl">

                {/* Header */}
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <h2 className="text-2xl font-semibold">
                        Employee Register
                    </h2>

                    <button onClick={() => setOpen(false)}>
                        <IoClose size={28} />
                    </button>
                </div>

                {/* Form */}
                <form className="p-6" onSubmit={handleSubmit}>

                    <h3 className="text-lg font-semibold mb-5">
                        Employee Information
                    </h3>

                    <div className="grid grid-cols-4 gap-5">

                        {/* Name */}
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter employee name"
                                name="name"
                                value={inputData.name}
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={inputData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Password</label>
                            <input
                                type="text"
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="font-medium">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                onChange={handleChange}
                                placeholder="Enter phone number"
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Department */}
                        <div>
                            <label className="font-medium">Department</label>
                            <select className="w-full mt-2 border rounded-md px-4 py-2" name="department" onChange={handleChange}>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Support</option>
                            </select>
                        </div>

                        {/* Role */}
                        <div>
                            <label className="font-medium">Role</label>
                            <select className="w-full mt-2 border rounded-md px-4 py-2" name="role" onChange={handleChange}>
                                <option>Sales Executive</option>
                                <option>Sales Manager</option>
                                <option>Digital Marketer</option>
                                <option>Marketing Executive</option>
                                <option>Support Executive</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="font-medium">Status</label>
                            <select value={inputData.status} className="w-full mt-2 border rounded-md px-4 py-2" name="status" onChange={handleChange}>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>

                        {/* Join Date */}
                        <div>
                            <label className="font-medium">Join Date</label>
                            <input
                                type="date"
                                name="date"
                                onChange={handleChange}
                                className="w-full mt-2 border rounded-md px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Is Admin : </label>
                            <input type="checkbox" className="mx-2  bg-amber-100" name="isAdmin" onChange={handleChange} />
                        </div>

                        {/* Address */}
                        <div className="col-span-2">
                            <label className="font-medium">Address</label>
                            <textarea
                                rows="3"
                                name="address"
                                onChange={handleChange}
                                placeholder="Enter address"
                                className="w-full mt-2 border rounded-md px-4 py-2 resize-none"
                            ></textarea>
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="flex justify-end gap-3 mt-8 border-t pt-5">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="px-6 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Register Employee
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddForm;