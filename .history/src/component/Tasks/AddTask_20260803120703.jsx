import React from 'react'

const leads = JSON.parse(localStorage.getItem("leads"))




const AddTask = () => {


    const handleChange = () => {

    }
    return (
        <div>
            <div>
                <form>
                    <div className="border grid grid-cols-3 p-2 ">
                        <div className="border flex flex-col gap-2 m-2">
                            <label>Title :</label>
                            <input name="title" className="border rounded" onChange={handleChange} type="text" placeholder="enter task title" />
                        </div>

                        <div  className="border flex flex-col gap-2 m-2">
                            <label>Description</label>
                            <input name="description"  className="border rounded" onChange={handleChange} type="text" placeholder='enter task description' />
                        </div>

                        <div  className="border flex flex-col gap-2 m-2">
                            <label>Lead</label>
                            <select name="lead" className="border rounded" onChange={handleChange}>
                                <option disabled selected>Select Lead</option>
                                {leads.map((lead) => {
                                    return (
                                        <option>{lead.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label>Assign</label>
                            <div>{ }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
