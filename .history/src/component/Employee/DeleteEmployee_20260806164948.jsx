import React from 'react'
import { IoClose } from "react-icons/io5";

const DeleteEmployee = ({ setDeleteModelOpen, deleteModelOpen,setDeletedEmp,deletedEmp }) => {

    if (!deleteModelOpen) return
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className=" w-150 h-100 bg-white shadow rounded p-4" >
                <div className="flex justify-between mb-2">
                    <p>Delete Employee</p>
                    <button onClick={() => setDeleteModelOpen(!deleteModelOpen) }>
                        <IoClose size={28} />
                    </button>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default DeleteEmployee
