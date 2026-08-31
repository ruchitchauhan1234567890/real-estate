import React from 'react'

const HisTasks = ({ task }) => {
    const myTask = [...task].sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).slice(0, 4)
    return (
        <div className="rounded-lg shadow-sm">
            <p className="my-2 px-2 font-bold">Recent Task</p>
            {myTask?.map((task) => {
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
            })}
            {!myTask ? <div>
                <p>No Task</p>
            </div> : ""}
        </div>
    )
}

export default HisTasks
