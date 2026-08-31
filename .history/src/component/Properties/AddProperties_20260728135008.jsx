
import axios from "axios";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddProperties = ({ open, setOpen,propertiesData,setPropertiesData }) => {
    const [data,setData] = useState()
    const [inputData, setInputData] = useState({
        propertyName: "",
        type: "",
        location: "",
        status: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("http://localhost:3001/properties")
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }

        // Validation
        if (
            !inputData.propertyName.trim() ||
            !inputData.type ||
            !inputData.location.trim() ||
            !inputData.status
        ) {
            alert("Please fill all fields");
            return;
        }

        setPropertiesData((prev) => [...prev, inputData])
        setInputData({
            propertyName: "",
            type: "",
            location: "",
            status: "",
        })

        setOpen(!open)
        // console.log(propertiesData)

        // try {
        //   const res = await axios.post(
        //     "http://localhost:3001/properties",
        //     inputData
        //   );

        //   console.log("Added Successfully:", res.data);

        //   alert("Property Added Successfully");

        //   // Reset Form
        //   setInputData({
        //     propertyName: "",
        //     type: "",
        //     location: "",
        //     status: "",
        //   });
        // } catch (error) {
        //   console.error(error);
        //   alert("Something went wrong");
        // }
    };

    console.log(propertiesData)
    console.log(data)

    if (!open) return

    return (
        <div className="inset-0 fixed bg-black/40 flex items-center justify-center z-50">


            <div className="w-200 border p-4 rounded-md bg-white">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Properties Register</h2>

                    <button type="button" onClick={() => setOpen(!open)}>
                        <IoClose size={28} />
                    </button>
                </div>

                <hr className="my-4" />

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-5">

                        <div className="flex flex-col gap-2">
                            <label>Property Name</label>

                            <input
                                type="text"
                                name="propertyName"
                                value={inputData.propertyName}
                                onChange={handleChange}
                                placeholder="Enter Property Name"
                                className="border rounded p-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Type</label>

                            <select
                                name="type"
                                value={inputData.type}
                                onChange={handleChange}
                                className="border rounded p-2"
                            >
                                <option value="">Select Type</option>
                                <option value="Villa">Villa</option>
                                <option value="Flat">Flat</option>
                                <option value="Office">Office</option>
                                <option value="Independent House">Independent House</option>
                                <option value="Row House">Row House</option>
                                <option value="Bungalows">Bungalows</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Location</label>

                            <textarea
                                name="location"
                                value={inputData.location}
                                onChange={handleChange}
                                className="border rounded p-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label>Price : </label>
                            <input type="number"/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Status</label>

                            <select
                                name="status"
                                value={inputData.status}
                                onChange={handleChange}
                                className="border rounded p-2"
                            >
                                <option value="">Select Status</option>
                                <option value="Available">Available</option>
                                <option value="Sold">Sold</option>
                                <option value="Rented">Rented</option>
                            </select>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProperties;