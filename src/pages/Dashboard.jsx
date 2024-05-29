import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const books = 350;
  const transactions = 236;
  const users = 924;
  const events = 60;
  const completed = 50;
  const pending = 100;

  const pieData = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ['#6366F1', '#F472B6'],
        hoverBackgroundColor: ['#4F46E5', '#EC4899'],
      },
    ],
  };

  const mixedData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        type: 'bar',
        label: 'Added books',
        data: [50, 75, 90, 85, 60, 93, 102],
        backgroundColor: '#F472B6',
        order: 2,
      },
      {
        type: 'line',
        label: 'Completed transactions',
        data: [35, 65, 80, 45, 50, 70, 85],
        borderColor: '#6366F1',
        backgroundColor: 'transparent',
        tension: 0.4,
        order: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-600">Total books</div>
          <div className="text-2xl font-semibold">{books.toLocaleString()}</div>
          <div className="text-green-500">Added books this month</div>
          <div className="text-2xl font-semibold">{books.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-600">Total transactions</div>
          <div className="text-2xl font-semibold">{transactions.toLocaleString()}</div>
          <div className="text-green-500">Transactions this month</div>
          <div className="text-2xl font-semibold">{transactions.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-600">Total users</div>
          <div className="text-2xl font-semibold">{users.toLocaleString()}</div>
          <div className="text-green-500">New users this month</div>
          <div className="text-2xl font-semibold">{users.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-600">Total events</div>
          <div className="text-2xl font-semibold">{events.toLocaleString()}</div>
          <div className="text-green-500">Events this month</div>
          <div className="text-2xl font-semibold">{events.toLocaleString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 h-full rounded-lg shadow-md">
          <div className="text-gray-600 mb-2">Transaction statistics</div>
          <div className="w-72 mx-auto">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="bg-white p-4 h-full rounded-lg shadow-md">
          <div className="text-gray-600 mb-2">Book statistics</div>
          <Bar data={mixedData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;