import React from "react"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

const TaskOverviewChart = ({ data = [] }) => {

  const totalTasks = data.reduce(
    (sum, item) => sum + item.count,
    0
  )

  return (
    <div className="w-full h-full bg-white border border-gray-100 rounded-xl p-5 shadow-sm">

      {/* Header */}
      <div className="mb-2">
        <h2 className="text-sm font-semibold text-gray-900">
          Tasks Overview
        </h2>
      </div>

      {/* No Data */}
      {data.length === 0 ? (

        <div className="h-[220px] flex items-center justify-center">
          <p className="text-xs text-gray-400">
            No Task Found
          </p>
        </div>

      ) : (

        <div className="h-[170px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              {/* Donut */}
              <Pie
                data={data}
                dataKey="count"
                nameKey="status"
                cx="32%"
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

              {/* Center Total */}
              <text
                x="32%"
                y="46%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x="32%"
                  dy="-4"
                  fontSize="10"
                  fill="#9ca3af"
                >
                  Total
                </tspan>

                <tspan
                  x="32%"
                  dy="20"
                  fontSize="18"
                  fontWeight="600"
                  fill="#111827"
                >
                  {totalTasks}
                </tspan>
              </text>

              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "11px"
                }}
              />

              {/* Legend */}
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="square"
                iconSize={7}
                wrapperStyle={{
                  fontSize: "10px",
                  lineHeight: "22px",
                  paddingRight: "5px"
                }}
                formatter={(value) => {

                  const item = data.find(
                    item => item.status === value
                  )

                  const count = item?.count || 0

                  const percentage =
                    totalTasks > 0
                      ? Math.round(
                          (count / totalTasks) * 100
                        )
                      : 0

                  return (
                    <span className="text-gray-500">
                      {value} ({count}) - {percentage}%
                    </span>
                  )
                }}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

      )}

    </div>
  )
}

export default TaskOverviewChart