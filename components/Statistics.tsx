import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface StatisticsProps {
  barData: ChartData;
  lineData: ChartData;
  pieData: ChartData;
}

const Statistics: React.FC<StatisticsProps> = ({ barData, lineData, pieData }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <Bar data={barData} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <Line data={lineData} />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Statistics;