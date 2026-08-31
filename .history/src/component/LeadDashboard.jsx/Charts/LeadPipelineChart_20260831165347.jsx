import React, { useContext } from "react"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList
} from "recharts"
import { ThemeContext } from "../../../ContextAPI/ThemeContext"




const LeadPipelineChart = ({ data = [] }) => {

    

    const { theme } =
        useContext(ThemeContext)

    const isDark =
        theme === "dark"


    // =====================================================
    // COLORS
    // =====================================================

    const colors = [
        "#3B82F6",
        "#22C55E",
        "#F59E0B",
        "#8B5CF6",
        "#06B6D4",
        "#EF4444",
        "#EC4899"
    ]


    // =====================================================
    // SHORT MOBILE LABELS
    // =====================================================

    const shortStatus = {

        "New": "New",

        "Connected": "Connect.",

        "Qualified": "Qual.",

        "Site Visit": "Visit",

        "Negotiation": "Negot.",

        "Converted": "Conv.",

        "Lost": "Lost"

    }


    // =====================================================
    // X AXIS LABEL
    // =====================================================

    const formatStatus = (value) => {

        return (
            shortStatus[value] ||
            value
        )

    }


    return (

        <div
            className="
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
                duration-200
            "
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-1.5">

                <h2
                    className="
                        text-xs
                        font-semibold

                        text-gray-900
                        dark:text-white
                    "
                >
                    Lead Pipeline
                </h2>


                <p
                    className="
                        text-[9px]

                        text-gray-400
                        dark:text-gray-500

                        mt-0.5
                    "
                >
                    Leads by current status
                </p>

            </div>


            {/* =================================================
                NO DATA
            ================================================= */}

            {data.length === 0 ? (

                <div
                    className="
                        flex-1

                        flex
                        items-center
                        justify-center
                    "
                >

                    <p
                        className="
                            text-[10px]

                            text-gray-400
                            dark:text-gray-500
                        "
                    >
                        No Lead Data Found
                    </p>

                </div>

            ) : (

                /* =================================================
                   CHART
                ================================================= */

                <div
                    className="
                        flex-1
                        min-h-[160px]

                        w-full
                        min-w-0
                    "
                >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={data}

                            margin={{
                                top: 18,
                                right: 8,
                                left: -22,
                                bottom: 12
                            }}

                            barCategoryGap="18%"
                        >

                            {/* =================================================
                                X AXIS
                            ================================================= */}

                            <XAxis
                                dataKey="status"

                                tickFormatter={
                                    formatStatus
                                }

                                tick={{
                                    fontSize: 8,

                                    fill:
                                        isDark
                                            ? "#9ca3af"
                                            : "#6b7280"
                                }}

                                tickLine={false}

                                axisLine={false}

                                interval="preserveStartEnd"

                                minTickGap={8}

                                height={28}
                            />


                            {/* =================================================
                                Y AXIS
                            ================================================= */}

                            <YAxis
                                allowDecimals={false}

                                tick={{
                                    fontSize: 8,

                                    fill:
                                        isDark
                                            ? "#6b7280"
                                            : "#9ca3af"
                                }}

                                tickLine={false}

                                axisLine={false}

                                width={28}
                            />


                            {/* =================================================
                                TOOLTIP
                            ================================================= */}

                            <Tooltip

                                cursor={{
                                    fill:
                                        isDark
                                            ? "#2a2a3c"
                                            : "#f9fafb"
                                }}

                                contentStyle={{
                                    borderRadius: "6px",

                                    border:
                                        isDark
                                            ? "1px solid #303044"
                                            : "1px solid #f3f4f6",

                                    backgroundColor:
                                        isDark
                                            ? "#272738"
                                            : "#ffffff",

                                    color:
                                        isDark
                                            ? "#f3f4f6"
                                            : "#374151",

                                    fontSize: "10px",

                                    padding: "6px",

                                    boxShadow:
                                        isDark
                                            ? "0 4px 10px rgba(0,0,0,0.25)"
                                            : "0 4px 10px rgba(0,0,0,0.06)"
                                }}

                                itemStyle={{
                                    color:
                                        isDark
                                            ? "#f3f4f6"
                                            : "#374151"
                                }}

                                labelStyle={{
                                    color:
                                        isDark
                                            ? "#d1d5db"
                                            : "#374151"
                                }}

                                formatter={(value) => [
                                    value,
                                    "Leads"
                                ]}
                            />


                            {/* =================================================
                                BARS
                            ================================================= */}

                            <Bar
                                dataKey="count"

                                barSize={16}

                                radius={[
                                    3,
                                    3,
                                    0,
                                    0
                                ]}
                            >

                                {/* =========================
                                    NUMBER ABOVE BAR
                                ========================= */}

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


                                {/* =========================
                                    BAR COLORS
                                ========================= */}

                                {data.map(
                                    (entry, index) => (

                                        <Cell
                                            key={
                                                `cell-${index}`
                                            }

                                            fill={
                                                entry.color ||
                                                colors[
                                                    index %
                                                    colors.length
                                                ]
                                            }
                                        />

                                    )
                                )}

                            </Bar>

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            )}

        </div>
    )
}


export default LeadPipelineChart