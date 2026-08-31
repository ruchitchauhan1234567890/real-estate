import React from 'react'

const AddLead = () => {
    return (
        <div>
            <div>
                <form>
                    <div>
                        <div>
                            <label>Full-Name</label>
                            <input
                                type="text"
                                placeholder='Enter The Lead Name'
                                name="name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input 
                            type="email"
                            placeholder="Enter email"
                            name="email"/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input 
                            type="number",
                            placeholder="Enter Phone"
                            name="phone"/>
                        </div>
                        <div>
                            <label></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLead
