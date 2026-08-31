import React from 'react'
import { IoClose } from "react-icons/io5";

const AddProperties = () => {
    return (
        <div className="w-full border-1 p-4">
            <div className="flex justify-between items-center bg-amber-100">
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
                        <input type="text" placeholder='enter property name' className="border-1 rounded-sm w-50" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Type :</label>
                        <select name="type" id="type"  className="border-1 rounded-sm w-50">
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
                        <textarea className="border-1 rounded-sm"></textarea>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Status :</label>
                        <select name="Status" id="Status" className="border-1 rounded-sm w-50">
                            <option>Available</option>
                            <option>Sold</option>
                            <option>Rented</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Choose Image : </label>
                        <input type="file" className="border-1 w-50" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProperties
