import React from 'react'

const leads = JSON.parse(localStorage.getItem("leads"))

const AddTask = () => {
    return (
        <div>
            <div>
                <form>
                    <div className="border grid grid-cols-3">
                        <div className="border flex flex-col gap-2">
                            <label>Title :</label>
                            <input className="border rounded" type="text" placeholder="enter task title" />
                        </div>

                        <div>
                            <label>Description</label>
                            <input type="text" placeholder='enter task description' />
                        </div>

                        <div>
                            <label>Lead</label>
                            <select>
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
