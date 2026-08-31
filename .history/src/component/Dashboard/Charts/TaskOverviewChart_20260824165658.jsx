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
    <div className="w-full h-full bg-white border border-gray-100 rounded-lg p-3 shadow-sm">

      {/* Header */}
      <div className="mb-1">
        <h2 className="text-[11px] font-semibold text-gray-900">
          Tasks Overview
        </h2>
      </div>

      {/* No Data */}
      {data.length === 0 ? (

        <div className="h-[130px] flex items-center justify-center">
          <p className="text-[10px] text-gray-400">
            No Task Found
          </p>
        </div>

      ) : (

        <div className="h-[135px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              {/* Donut */}
              <Pie
                data={data}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                innerRadius={18}
                outerRadius={40}
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
                  border: "1px solid #e5e7eb",
                  fontSize: "10px",
                  padding: "5px 7px"
                }}
              />

              {/* Legend */}
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="square"
                iconSize={6}
                wrapperStyle={{
                  fontSize: "9px",
                  lineHeight: "18px",
                  paddingRight: "2px"
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