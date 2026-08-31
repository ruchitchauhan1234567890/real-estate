import React from 'react'

const AddLead = () => {
    return (
        <div>
            <form>
                <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col gap-2">
                        <label>Full-Name</label>
                        <input
                            type="text"
                            placeholder='Enter The Lead Name'
                            name="name"
                            className="border w-10" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            type="number"
                            placeholder="Enter Phone"
                            name="phone" />
                    </div>
                    <div>
                        <label>Interested In</label>
                        <input
                            type="text"
                            placeholder='Interested In'
                            name="interested" />
                    </div>
                    <div>
                        <label>Budget</label>
                        <input
                            type="number"
                            placeholder='Enter Budget'
                            name="budget" />
                    </div>
                    <div>
                        <label>Preferred Location</label>
                        <input
                            type="text"
                            placeholder='Enter Location'
                            name="preferredLocation" />
                    </div>
                    <div>
                        <label>Source</label>
                        <select name="source">
                            <option>Website</option>
                            <option>Walk-in</option>
                            <option>Referral</option>
                            <option>Social-media</option>
                        </select>
                    </div>
                    <div>
                        <label>Assigned To</label>
                        <select name="assignedTo">
                            <option>Ruchit Chauhan</option>
                            <option>Harpal Chauhan</option>
                            <option>Sandip Parmar</option>
                        </select>
                    </div>
                    <div>
                        <label>Note</label>
                        <input
                            type="text"
                            placeholder='Enter Note'
                            name="note" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddLead
