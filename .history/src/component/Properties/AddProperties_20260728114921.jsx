import axios from 'axios';
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddProperties = () => {

    const [propertyData,setPropertyData] = useState([])
    const [inputData, setInputData] = useState({
        propertyName: "",
        type: "",
        location: "",
        status: "",
        src: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData((prev) => ({ ...prev, [name]: value }))
    }

    // const propertyData = async (inputData) => {
    //     try {
    //         const res = await axios.post("http://localhost:3001/properties", inputData);
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     c
    //     // try {
    //     //     await axios.post("http://localhost:3001/properties", inputData);
    //     // } catch (error) {
    //     //     console.log(error)
    //     // }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setPropertyData((prev) => [...prev, inputData])

      


        console.log("Done");
    };

    console.log(propertyData)


    return (
        <div className="w-full border-1 p-4">
            <div className="flex justify-between items-center  m-auto">
                <h2>Properties Register</h2>
                <button type="button">
                    <IoClose size={28} />
                </button>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 mt-5 ">
                    <div className="flex flex-col gap-1">
                        <label>Property Name :</label>
                        <input value={inputData.propertyName} type="text" name="propertyName" onChange={handleChange} placeholder='enter property name' className="border-1 rounded-sm w-50" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Type :</label>
                        <select name="type" id="type" onChange={handleChange} className="border-1 rounded-sm w-50">
                            <option>Villa</option>
                            <option>Flat</option>
                            <option>Office</option>
                            <option>Independent House</option>
                            <option>Row House</option>
                            <option>Bungalows</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>Location :</label>
                        <textarea name="location" onChange={handleChange} className="border-1  rounded-sm"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Status :</label>
                        <select name="status" id="Status" onChange={handleChange} className="border-1 rounded-sm w-50">
                            <option>Available</option>
                            <option>Sold</option>
                            <option>Rented</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Choose Image : </label>
                        <input type="file" name="src" onChange={handleChange} className="border-1 w-50" />
                    </div>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddProperties
