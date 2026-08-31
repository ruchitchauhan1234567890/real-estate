import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList
} from "recharts";

const LeadPipelineChart = ({ data = [] }) => {

    const colors = [
        "#3B82F6",
        "#22C55E",
        "#F59E0B",
        "#8B5CF6",
        "#06B6D4",
        "#EF4444",
        "#EC4899"
    ];

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
                    Lead Pipeline
                </h2>

                <p className="
                    text-[9px]
                    text-gray-400
                    mt-0.5
                ">
                    Leads by current status
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
                        No Lead Data Found
                    </p>
                </div>

            ) : (

                /* Chart */
                <div className="
                    flex-1
                    min-h-[140px]
                ">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={data}
                            margin={{
                                top: 15,
                                right: 5,
                                left: -25,
                                bottom: 0
                            }}
                            barCategoryGap="30%"
                        >

                            <CartesianGrid
                                stroke="#f3f4f6"
                                strokeDasharray="3 3"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="status"
                                tick={{
                                    fontSize: 8,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                                interval={0}
                            />

                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fontSize: 8,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Tooltip
                                cursor={{
                                    fill: "#f9fafb"
                                }}
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

                            <Bar
                                dataKey="count"
                                barSize={16}
                                radius={[3, 3, 0, 0]}
                            >

                                <LabelList
                                    dataKey="count"
                                    position="top"
                                    fontSize={8}
                                    fill="#374151"
                                />

                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            entry.color ||
                                            colors[index % colors.length]
                                        }
                                    />
                                ))}

                            </Bar>

                        </BarChart>

                    </ResponsiveContainer>

                </div>
            )}

        </div>
    );
};

export default LeadPipelineChart;