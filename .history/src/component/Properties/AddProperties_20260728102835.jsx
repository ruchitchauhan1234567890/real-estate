import React from 'react'
import { IoClose } from "react-icons/io5";

const AddProperties = () => {
  return (
    <div>
        <div>
            <h2>Properties Register</h2>
            <button>
                <IoClose size={28} />
            </button>
        </div>
      <form>
        <div>
            <div>
                <label>Property Name</label>
                <input type="text" placeholder='enter property name'/>
            </div>
            
            <div>
                <label>Type</label>
                <select name="type" id="type">
                    <option>Villa</option>
                    <option>Flat</option>
                    <option>Office</option>
                    <option>Independent House</option>
                    <option>Row House</option>
                    <option>Bungalows</option>
                </select>
            </div>

            <div>
                <label>Location</label>
                <textarea></textarea>
            </div>

            <div>
                <label>Status</label>
                <select name="Status" id="Status">
                    <option>Available</option>
                    <option>Sold</option>
                    <option>Rented</option>
                </select>
            </div>

            <div>
                <label>Choose Image</label>
                <input type="file"/>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddProperties
