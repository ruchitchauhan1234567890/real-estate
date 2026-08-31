import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const AddProperties = () => {

    const [inputData, setInputData] = useState({
        propertyName : "",
        type :"",
        location : "",
        status : "",
        src : ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setInputData((prev) => ({...prev, [name] : value}))
    }

    console.log(inputData)
    
    return (
        <div className="w-full border-1 p-4">
            <div className="flex justify-between items-center  m-auto">
                <h2>Properties Register</h2>
                <button>
                    <IoClose size={28} />
                </button>
            </div>
            <hr/>
            <form>
                <div className="grid grid-cols-3 mt-5 ">
                    <div className="flex flex-col gap-1">
                        <label>Property Name :</label>
                        <input type="text" name="propertyName" onChange={handleChange} placeholder='enter property name' className="border-1 rounded-sm w-50" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Type :</label>
                        <select name="type" id="type" name="type" onChange={handleChange}  className="border-1 rounded-sm w-50">
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
            </form>
        </div>
    )
}

export default AddProperties
