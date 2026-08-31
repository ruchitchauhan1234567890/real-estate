import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const TaskOverviewChart = ({ data }) => {
  return (
    <div className="rounded-lg shadow-sm p-5 w-auto h-full">

      <h2 className="text-lg font-semibold mb-4">
        Tasks by Status
      </h2>

      {
        data.length <= 0 && <p>No Task Found</p>
      }

      <ResponsiveContainer width="100%" height="80%">

        <PieChart>

          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="35%"
            cy="50%"
            innerRadius={30}
            outerRadius={60}
            paddingAngle={2}
          >

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}

          </Pie>

          <Tooltip />

          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );

}

export default TaskOverviewChart
