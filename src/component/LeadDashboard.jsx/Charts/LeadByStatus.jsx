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

    const isDark =
        document.documentElement.classList.contains("dark");

    return (
        <div className="
            w-full
            h-full

            bg-white
            dark:bg-[#1f1f2b]

            rounded-lg

            border
            border-gray-200
            dark:border-[#303044]

            p-3

            flex
            flex-col

            transition-colors
        ">

            {/* Header */}
            <div className="mb-1.5">

                <h2 className="
                    text-xs
                    font-semibold
                    text-gray-900
                    dark:text-white
                ">
                    Leads by Source
                </h2>

                <p className="
                    text-[9px]
                    text-gray-400
                    dark:text-gray-500
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
                    <p className="
                        text-[10px]
                        text-gray-400
                        dark:text-gray-500
                    ">
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
                                    border: isDark
                                        ? "1px solid #303044"
                                        : "1px solid #f3f4f6",
                                    backgroundColor: isDark
                                        ? "#272738"
                                        : "#ffffff",
                                    color: isDark
                                        ? "#f3f4f6"
                                        : "#374151",
                                    fontSize: "10px",
                                    padding: "6px",
                                    boxShadow: isDark
                                        ? "0 4px 10px rgba(0,0,0,0.25)"
                                        : "0 4px 10px rgba(0,0,0,0.06)"
                                }}
                                itemStyle={{
                                    color: isDark
                                        ? "#f3f4f6"
                                        : "#374151"
                                }}
                                labelStyle={{
                                    color: isDark
                                        ? "#d1d5db"
                                        : "#374151"
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
                                    color: isDark
                                        ? "#9ca3af"
                                        : "#6b7280",
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
                                        <span className="
                                            text-gray-500
                                            dark:text-gray-400
                                        ">
                                            {value}{" "}

                                            <span className="
                                                font-semibold
                                                text-gray-800
                                                dark:text-gray-200
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