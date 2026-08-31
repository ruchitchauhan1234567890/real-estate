import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const EmployeeLeadByStatus = ({ data = [] }) => {

    const totalLeads =
        data?.reduce((sum, item) => sum + item.count, 0) || 0;

    return (
        <div className="w-full h-full bg-white border border-gray-200 rounded-xl p-3 flex flex-col">

            {/* Header */}
            <div className="mb-1">
                <h2 className="text-sm font-semibold text-gray-900">
                    Leads by Status
                </h2>

                <p className="text-[10px] text-gray-400 mt-0.5">
                    Lead distribution by current status
                </p>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[130px] relative">

                {data.length === 0 ? (

                    <div className="h-full flex items-center justify-center">
                        <p className="text-xs text-gray-400">
                            No Leads Found
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="count"
                                nameKey="status"
                                cx="38%"
                                cy="50%"
                                innerRadius={18}
                                outerRadius={42}
                                paddingAngle={2}
                                stroke="none"
                            >

                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                    />
                                ))}

                            </Pie>

                            {/* Tooltip */}
                            <Tooltip
                                contentStyle={{
                                    borderRadius: "6px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "10px",
                                    padding: "6px 8px",
                                    boxShadow:
                                        "0 2px 6px rgba(0,0,0,0.08)"
                                }}
                            />

                            {/* Legend */}
                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                align="right"
                                iconType="circle"
                                iconSize={6}
                                wrapperStyle={{
                                    fontSize: "10px",
                                    color: "#6b7280",
                                    lineHeight: "18px"
                                }}
                                formatter={(value) => {

                                    const item = data.find(
                                        (item) => item.status === value
                                    );

                                    const count = item?.count || 0;

                                    const percentage =
                                        totalLeads > 0
                                            ? Math.round(
                                                (count / totalLeads) * 100
                                            )
                                            : 0;

                                    return (
                                        <span className="text-gray-500">
                                            {value}:{" "}
                                            <span className="font-semibold text-gray-800">
                                                {percentage}%
                                            </span>
                                        </span>
                                    );
                                }}
                            />

                        </PieChart>

                    </ResponsiveContainer>

                )}

            </div>

        </div>
    );
};

export default EmployeeLeadByStatus;