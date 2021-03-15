import React from 'react';

import { formatDate } from '../../utils';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>date: {formatDate(label)}</p>
        <p>temperature: {payload[0].payload.avg}℃</p>
        <p>min-max: {`${payload[0].payload.min}-${payload[0].payload.max}℃`}</p>
      </div>
    );
  }

  return null;
};

export const Chart = ({ data }) => (
  <BarChart layout={'vertical'} width={600} height={1000} data={data}>
    <CartesianGrid strokeDasharray="5 5" />
    <YAxis type="category" dataKey="date" fontSize="10" tickFormatter={tick => formatDate(tick)} />
    <XAxis type="number" />
    <Tooltip position={{ y: 80, x: 600 }} content={<CustomTooltip />} />
    <Legend />
    <Bar name="temperature ℃" dataKey="avg" fill="#8884d8" />
  </BarChart>
);
