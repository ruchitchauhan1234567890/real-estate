import React from 'react'

const TaskCard = () => {
    const task = JSON.parse(localStorage.getItem("tasks"))
    const cards = [
        {
            id: 1,
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp
        },
        {
            id: 2,
            title: "Connected",
            value: connected,
            icon: HiChat
        },
        {
            id: 3,
            title: "Qualified",
            value: qualified,
            icon: AiFillTag
        },
        {
            id: 4,
            title: "Converted",
            value: converted,
            icon: HiUsers
        },
        {
            id: 5,
            title: "Lost",
            value: lost,
            icon: FaThumbsDown
        },
        {
            id: 6,
            title: "New",
            value: newLead,
            icon: MdAccessibilityNew
        }
    ]


    return (
        <div>

        </div>
    )
}

export default TaskCard
