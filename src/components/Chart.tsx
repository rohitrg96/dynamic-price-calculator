import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockPriceData } from '../utils/const';

export const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={mockPriceData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};
