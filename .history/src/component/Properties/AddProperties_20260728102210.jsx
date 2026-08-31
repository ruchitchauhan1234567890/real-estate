import React from 'react'

const AddProperties = () => {
  return (
    <div>
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
        </div>
      </form>
    </div>
  )
}

export default AddProperties
