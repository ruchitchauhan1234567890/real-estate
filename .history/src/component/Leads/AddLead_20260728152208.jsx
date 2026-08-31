import React from 'react'
import { IoClose } from "react-icons/io5";

const AddLead = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center px-3 py-2 bg-amber-800">
                    <p className="text-2xl font-semibold">Lead Register</p>
                    <button>
                        <IoClose size={28} />
                    </button>
                </div>
                <form className="p-6">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col">
                            <label className="font-medium">Full-Name</label>
                            <input
                                type="text"
                                placeholder='Enter The Lead Name'
                                name="name"
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" /> 
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
        </div>
    )
}

export default AddLead
