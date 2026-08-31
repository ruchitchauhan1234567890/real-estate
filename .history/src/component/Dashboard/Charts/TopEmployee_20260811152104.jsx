import React, { useState } from 'react'

const TopEmployee = ({ employee, lead }) => {

    const [showALl,setShowAll] = useState(false)
    console.log(employee)
    console.log(lead)


    const data = employee.map((emp) => {
        const result = lead.reduce((acc, curr) => {
            if (curr.assignedTo === emp.name) {
                acc.totalLead++
                if (curr.status === "Converted") {
                    acc.convertedLead++
                }
            }

            return acc
        }, {
            name: emp.name,
            totalLead: 0,
            convertedLead: 0
        })

        return {
            ...result,
            conversionRate:
                result.totalLead > 0
                    ? (result.convertedLead / result.totalLead) * 100
                    : 0
        }
    })
    .sort((a,b) => b.conversionRate - a.conversionRate)

    console.log(data)

    

    console.log(data)
    return (
        <div className="w-full rounded-xl p-3 shadow-sm">

            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-1xl font-semibold text-gray-900">
                    Top Performing Employees
                </h3>

                <button className="text-[12px] font-medium text-blue-600 hover:text-blue-700">
                    View All
                </button>
            </div>

            {/* Employees */}
            <div className="divide-y divide-gray-100">

                {data.map((item, index) => (
                    <div
                        key={item.name}
                        className="flex items-center  justify-between py-2"
                    >

                        <div className="flex items-center gap-2">

                            <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>


                            <div>
                                <p className="text-[12px] font-semibold text-gray-800">
                                    {item.name}
                                </p>

                                <p className="text-[10px] text-gray-500">
                                    Converted Leads :
                                    <span className="ml-1  font-medium text-gray-700">
                                        {item.convertedLead}
                                    </span>
                                </p>
                            </div>

                        </div>


                        <div className="text-right">
                            <p className="text-[14px] font-semibold text-green-600">
                                {item.conversionRate}%
                            </p>

                            <p className="text-[8px] text-gray-500">
                                Conversion Rate
                            </p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}
export default TopEmployee
