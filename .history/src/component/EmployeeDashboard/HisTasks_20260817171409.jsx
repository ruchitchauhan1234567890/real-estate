import React from 'react'

const HisTasks = ({ task }) => {
    const myTask = [...task].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).slice(0, 4)
    return (
        <div className="rounded-lg shadow-sm w-full h-full">
            <p className="my-1 px-2 py-2 font-bold">Recent Task</p>
            {myTask.length > 0 ? (myTask.map((task) => {
                return (
                    <div className="flex justify-between mb-1 px-2 py-1 mx-2 hover:bg-gray-200 rounded-lg">
                        <div>
                            <p className="text-1xl">{task.lead}</p>
                            <p className="text-xs">{task.title}</p>
                        </div>
                        <div>
                            <p className="text-sm">{task.taskStatus}</p>
                        </div>
                    </div>
                )
            })) : (
                <div className="px-2 py-4 text-center">
                    <p>No Task Found</p>
                </div>
            )}
        </div>
    )
}

export default HisTasks
