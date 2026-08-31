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
        <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">

            {/* Header */}
            <div className="mb-3">
                <h2 className="text-sm font-bold text-gray-900">
                    Lead Pipeline
                </h2>

                <p className="text-[10px] text-gray-400 mt-1">
                    Leads by current status
                </p>
            </div>

            {/* No Data */}
            {data.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-xs text-gray-400">
                        No Lead Data Found
                    </p>
                </div>
            ) : (

                /* Chart */
                <div className="flex-1 min-h-[180px]">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 5,
                                left: -20,
                                bottom: 5
                            }}
                            barCategoryGap="25%"
                        >

                            {/* Background grid */}
                            <CartesianGrid
                                stroke="#f3f4f6"
                                strokeDasharray="3 3"
                                vertical={false}
                            />

                            {/* X Axis */}
                            <XAxis
                                dataKey="status"
                                tick={{
                                    fontSize: 9,
                                    fill: "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                                interval={0}
                            />

                            {/* Y Axis */}
                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fontSize: 9,
                                    fill: "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />

                            {/* Tooltip */}
                            <Tooltip
                                cursor={{
                                    fill: "#f9fafb"
                                }}
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "1px solid #f3f4f6",
                                    fontSize: "11px",
                                    boxShadow:
                                        "0 4px 12px rgba(0,0,0,0.08)"
                                }}
                                formatter={(value) => [
                                    value,
                                    "Leads"
                                ]}
                            />

                            {/* Bars */}
                            <Bar
                                dataKey="count"
                                barSize={22}
                                radius={[4, 4, 0, 0]}
                            >

                                <LabelList
                                    dataKey="count"
                                    position="top"
                                    fontSize={10}
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