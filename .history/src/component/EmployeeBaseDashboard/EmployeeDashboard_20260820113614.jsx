import React from 'react'

const EmployeeDashboardCard = () => {

    const current = JSON.parse(localStorage.getItem("loggedUser"))
    const lead = JSON.parse(localStorage.getItem("leads"))
    const myLead = lead.filter((lead) => lead.assignedTo === current.name)
    // const emp = JSON.parse(localStorage.getItem("employee"))
    const task = JSON.parse(localStorage.getItem("tasks"))
    const myTask = task.filter((task) => task.assign === current.name)


    const totalLead = myLead.length
    const convertedLead = myLead.filter((lead) => lead.status === "Converted").length
    // const totalEmp = emp.filter((emp) => !emp.isAdmin).length
    const pendingTask = myTask.filter((task) => task.taskStatus === "Pending").length

    const card = [
        {
            title: "Total Leads",
            value: totalLead,
            icon: IoPeopleSharp
        },
        {
            title: 'Converted Leads',
            value: convertedLead,
            icon: HiUsers
        },
        {
            title: "Pending Tasks",
            value: pendingTask,
            icon: MdEmojiPeople
        }
    ]
    return (
        <div className="mt-3">
            <div className="grid  grid-cols-4 gap-2">
                {card.map((item) => {
                    return (
                        <div className="flex items-center gap-3 px-3 py-2 rounded shadow">
                            <item.icon className="h-8 w-8 rounded bg-amber-300" />
                            <div className="">
                                <p>{item.title}</p>
                                <p>{item.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
}

export default EmployeeDashboardCard
