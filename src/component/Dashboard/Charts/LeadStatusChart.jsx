import React, { useContext } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../ContextAPI/ThemeContext";

const LeadStatusChart = ({ data }) => {

    const { theme } = useContext(ThemeContext);

    const totalLeads =
        data?.reduce((sum, item) => sum + item.count, 0) || 0;

    const isDark = theme === "dark";

    return (
        <div className="
            w-full
            h-full
            p-3
            flex
            flex-col
        ">

            {/* Header */}

            <div className="mb-1">

                <h2 className="
                    text-sm
                    font-semibold
                    text-gray-900
                    dark:text-white
                ">
                    Leads by Status
                </h2>

                <p className="
                    text-[9px]
                    text-gray-400
                    dark:text-gray-500
                    mt-0.5
                ">
                    Lead status distribution
                </p>

            </div>


            {/* Chart */}

            <div className="
                flex-1
                min-h-0
                relative
            ">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="status"
                            cx="38%"
                            cy="50%"
                            innerRadius={20}
                            outerRadius={48}
                            paddingAngle={2}
                            stroke="none"
                        >

                            {data?.map((entry, index) => (

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
                                    ? "1px solid #45455A"
                                    : "none",

                                backgroundColor: isDark
                                    ? "#2A2A40"
                                    : "#ffffff",

                                color: isDark
                                    ? "#ffffff"
                                    : "#111827",

                                fontSize: "10px",

                                padding: "7px",

                                boxShadow:
                                    "0 2px 6px rgba(0,0,0,0.08)"
                            }}

                            labelStyle={{
                                color: isDark
                                    ? "#ffffff"
                                    : "#111827"
                            }}

                            itemStyle={{
                                color: isDark
                                    ? "#d1d5db"
                                    : "#374151"
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
                                fontSize: "9px",

                                color: isDark
                                    ? "#9ca3af"
                                    : "#4b5563",

                                lineHeight: "18px"
                            }}

                            formatter={(value) => {

                                const item = data.find(
                                    (i) => i.status === value
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
                                    <span
                                        className="
                                            text-gray-500
                                            dark:text-gray-400
                                        "
                                    >

                                        {value}:{" "}

                                        <span
                                            className="
                                                font-semibold
                                                text-gray-800
                                                dark:text-white
                                            "
                                        >
                                            {percentage}%
                                        </span>

                                    </span>
                                );

                            }}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default LeadStatusChart;