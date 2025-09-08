import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './Charts.css';

const COLORS = ['#0088FE', '#d3d3d3'];

const CloudAccountChart = ({ data }) => {
  return (
    <div className="chart-container">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CloudAccountChart;