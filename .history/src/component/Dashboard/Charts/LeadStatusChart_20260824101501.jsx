import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label
} from "recharts";

const LeadStatusChart = ({ data }) => {

    const totalLeads = data?.reduce((sum, item) => sum + item.count, 0) || 0;

    return (
        <div className="w-full h-full p-5 flex flex-col">

            <div className="mb-2">
                <h2 className="text-lg font-bold text-gray-900">
                    Leads by Status
                </h2>
            </div>

            <div className="flex-1 min-h-[170px] relative">
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
                            {data?.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}
                        </Pie>

                        {/* <text
                            x="40%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            <tspan x="40%" dy="-0.5em" fontSize="12" fill="#6b7280">Total</tspan>
                            <tspan x="40%" dy="1.5em" fontSize="24" fontWeight="bold" fill="#111827">{totalLeads}</tspan>
                        </text> */}

                        <Tooltip
                            contentStyle={{
                                borderRadius: "8px",
                                border: "none",
                                fontSize: "12px",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            }}
                        />

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
                            formatter={(value, entry) => {
                                const item = data.find(i => i.status === value);
                                const count = item?.count || 0;
                                const percentage = totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0;
                                return <span className="text-gray-600">{value}: <span className="font-semibold text-gray-900">{percentage}%</span></span>;
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default LeadStatusChart;