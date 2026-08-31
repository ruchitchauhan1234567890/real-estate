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
                    Lead Pipeline
                </h2>

                <p className="
                    text-[9px]
                    text-gray-400
                    dark:text-gray-500
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
                    <p className="
                        text-[10px]
                        text-gray-400
                        dark:text-gray-500
                    ">
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

                            {/* <CartesianGrid
                                stroke={
                                    isDark
                                        ? "#303044"
                                        : "#f3f4f6"
                                }
                                strokeDasharray="3 3"
                                vertical={false}
                            /> */}


                            <XAxis
                                dataKey="status"
                                tick={{
                                    fontSize: 8,
                                    fill: isDark
                                        ? "#9ca3af"
                                        : "#6b7280"
                                }}
                                tickLine={false}
                                axisLine={false}
                                interval={0}
                            />


                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fontSize: 8,
                                    fill: isDark
                                        ? "#6b7280"
                                        : "#9ca3af"
                                }}
                                tickLine={false}
                                axisLine={false}
                            />


                            <Tooltip
                                cursor={{
                                    fill: isDark
                                        ? "#2a2a3c"
                                        : "#f9fafb"
                                }}
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


                            <Bar
                                dataKey="count"
                                barSize={16}
                                radius={[3, 3, 0, 0]}
                            >

                                <LabelList
                                    dataKey="count"
                                    position="top"
                                    fontSize={8}
                                    fill={
                                        isDark
                                            ? "#d1d5db"
                                            : "#374151"
                                    }
                                />

                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            entry.color ||
                                            colors[
                                                index %
                                                colors.length
                                            ]
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