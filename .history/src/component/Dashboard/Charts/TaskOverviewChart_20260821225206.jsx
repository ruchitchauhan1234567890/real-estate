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

  return (
    <div className="w-full h-[330px] bg-white rounded-xl border border-gray-200 p-4">

      {/* Header */}
      <div className="mb-2">
        <h2 className="text-sm font-semibold text-gray-800">
          Tasks Overview
        </h2>
      </div>

      {/* No Data */}
      {data.length === 0 ? (
        <div className="h-[270px] flex items-center justify-center">
          <p className="text-sm text-gray-400">
            No Task Found
          </p>
        </div>
      ) : (

        <div className="w-full h-[270px]">

          <ResponsiveContainer width="100%" height="auto">

            <PieChart>

              <Pie
                data={data}
                dataKey="count"
                nameKey="status"
                cx="30%"
                cy="50%"
                innerRadius={30}
                outerRadius={58}
                paddingAngle={1}
              >

                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}

              </Pie>

              <Tooltip
                contentStyle={{
                  fontSize: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb"
                }}
              />

              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="square"
                iconSize={9}
                wrapperStyle={{
                  fontSize: "11px",
                  lineHeight: "20px",
                  paddingRight: "5px"
                }}
                formatter={(value, entry) => {
                  const item = data.find(
                    (item) => item.status === value
                  )

                  return `${value} (${item?.count || 0})`
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