import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const LeadByStatus = ({ data = [] }) => {

    const totalLeads = data.reduce(
        (sum, item) => sum + item.count,
        0
    );

    return (
        <div className="
            w-full
            h-full
            bg-white
            rounded-lg
            border
            border-gray-200
            p-3
            flex
            flex-col
        ">

            {/* Header */}
            <div className="mb-1.5">

                <h2 className="
                    text-xs
                    font-semibold
                    text-gray-900
                ">
                    Leads by Source
                </h2>

                <p className="
                    text-[9px]
                    text-gray-400
                    mt-0.5
                ">
                    Distribution of leads by source
                </p>

            </div>

            {/* No Data */}
            {data.length === 0 ? (

                <div className="
                    flex-1
                    flex
                    items-center
                    justify-center
                ">
                    <p className="text-[10px] text-gray-400">
                        No Lead Source Found
                    </p>
                </div>

            ) : (

                <div className="
                    flex-1
                    min-h-[140px]
                ">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <PieChart>

                            {/* Pie */}
                            <Pie
                                data={data}
                                dataKey="count"
                                nameKey="source"
                                cx="38%"
                                cy="50%"
                                innerRadius={22}
                                outerRadius={45}
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
                                    border: "1px solid #f3f4f6",
                                    fontSize: "10px",
                                    padding: "6px",
                                    boxShadow:
                                        "0 4px 10px rgba(0,0,0,0.06)"
                                }}
                                formatter={(value) => [
                                    value,
                                    "Leads"
                                ]}
                            />

                            {/* Legend */}
                            <Legend
                                layout="vertical"
                                verticalAlign="middle"
                                align="right"
                                iconType="circle"
                                iconSize={6}
                                wrapperStyle={{
                                    fontSize: "9px",
                                    color: "#6b7280",
                                    lineHeight: "18px"
                                }}
                                formatter={(value) => {

                                    const item = data.find(
                                        (item) =>
                                            item.source === value
                                    );

                                    const count =
                                        item?.count || 0;

                                    const percentage =
                                        totalLeads > 0
                                            ? Math.round(
                                                (count / totalLeads) * 100
                                            )
                                            : 0;

                                    return (
                                        <span className="text-gray-500">
                                            {value}{" "}
                                            <span className="
                                                font-semibold
                                                text-gray-800
                                            ">
                                                {percentage}%
                                            </span>
                                        </span>
                                    );
                                }}
                            />

                        </PieChart>

                    </ResponsiveContainer>

                </div>
            )}

        </div>
    );
};

export default LeadByStatus;