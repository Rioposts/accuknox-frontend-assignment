import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Charts.css';

const ImageRiskChart = ({ data }) => {
  return (
    <div className="chart-container">
      <BarChart
        width={300}
        height={150}
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={60} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
};

export default ImageRiskChart;