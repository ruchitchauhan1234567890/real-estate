import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const EmployeeTaskStatus = ({ data = [] }) => {

    const totalTasks =
        data?.reduce((sum, item) => sum + item.count, 0) || 0;

    return (
        <div className="w-full h-full p-5 flex border rounded-lg flex-col">

            {/* Header */}
            <div className="mb-2">
                <h2 className="text-lg font-bold text-gray-900">
                    Tasks by Status
                </h2>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[170px] relative">

                {data.length === 0 ? (

                    <div className="h-full flex items-center justify-center">
                        <p className="text-sm text-gray-400">
                            No Task Found
                        </p>
                    </div>

                ) : (

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="count"
                                nameKey="status"
                                cx="40%"
                                cy="50%"
                                innerRadius={20}
                                outerRadius={50}
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
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "12px",
                                    boxShadow:
                                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                }}
                            />

                            {/* Legend */}
                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                align="right"
                                iconType="circle"
                                iconSize={8}
                                wrapperStyle={{
                                    fontSize: "12px",
                                    color: "#4b5563"
                                }}
                                formatter={(value) => {

                                    const item = data.find(
                                        (item) => item.status === value
                                    );

                                    const count = item?.count || 0;

                                    const percentage =
                                        totalTasks > 0
                                            ? Math.round(
                                                (count / totalTasks) * 100
                                            )
                                            : 0;

                                    return (
                                        <span className="text-gray-600">
                                            {value}:{" "}
                                            <span className="font-semibold text-gray-900">
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

export default EmployeeTaskStatus;