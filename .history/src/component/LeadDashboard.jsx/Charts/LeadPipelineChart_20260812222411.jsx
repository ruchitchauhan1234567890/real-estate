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

const LeadPipelineChart = ({ data }) => {

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm w-[400px] h-[350px]">

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Lead Pipeline
            </h2>

            <ResponsiveContainer width="100%" height="85%">

                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 0,
                        bottom: 5
                    }}
                >

                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="status"
                        tick={{ fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        hide
                    />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        barSize={25}
                        radius={[2, 2, 0, 0]}
                    >

                        <LabelList
                            dataKey="count"
                            position="top"
                            fontSize={12}
                        />

                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={[
                                    "#2563EB",
                                    "#0EA5E9",
                                    "#22C55E",
                                    "#F97316",
                                    "#EC4899",
                                    "#16A34A",
                                    "#EF4444"
                                ][index % 7]}
                            />
                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default LeadPipelineChart;