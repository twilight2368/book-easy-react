import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import WrapBar from '../components/WrapBar';
import environment from '../environment';

const Dashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [transactionStats, setTransactionStats] = useState([]);
  const [weeklyTransactions, setWeeklyTransactions] = useState([]);
  const [weeklyBooks, setWeeklyBooks] = useState([]);
  const completed = 50;
  const pending = 100;

  const fetchStatistics = async () => {
    try {
      const response = await fetch(`${environment.apiUrl}/statistics/overview`);
      const data = await response.json();
      setStatistics(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchTransactionStats = async () => {
    try {
      const response = await fetch(`${environment.apiUrl}/statistics/charts/transactions-by-status?filter-by=`);
      const data = await response.json();
      const stats = [];
      data.forEach(stat => {
        stats.push(stat.percentage);
      });
      setTransactionStats(stats);
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchWeeklyTransactions = async () => {
    try {
      const stats = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() - i);
        const response = await fetch(`${environment.apiUrl}/statistics/charts/transactions-by-date?from=${date.toISOString().slice(0, 10)}`);
        const data = await response.json();
        stats.push(data[0].number);
        console.log(data);

      }
      setWeeklyTransactions(stats);
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchWeeklyBooks = async () => {
    try {
      const stats = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() - i);
        const response = await fetch(`${environment.apiUrl}/statistics/charts/new-books-by-date?from=${date.toISOString().slice(0, 10)}`);
        const data = await response.json();
        stats.push(data[0].number);
      }
      setWeeklyBooks(stats);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchStatistics();
    fetchTransactionStats();
    fetchWeeklyTransactions();
    fetchWeeklyBooks();
  }, [])

  // console.log(weeklyBooks);
  // console.log(weeklyTransactions);

  const pieData = {
    labels: ['Confirmed', 'Delivering', 'Completed', 'Cancelled'],
    datasets: [
      {
        data: transactionStats,
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
        data: weeklyBooks,
        backgroundColor: '#F472B6',
        order: 2,
      },
      {
        type: 'line',
        label: 'Completed transactions',
        data: weeklyTransactions,
        borderColor: '#6366F1',
        backgroundColor: 'transparent',
        tension: 0.4,
        order: 1,
      },
    ],
  };

  return (
    <WrapBar>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">Total books</div>
            <div className="text-2xl font-semibold">{statistics.allBooks}</div>
            <div className="text-green-500">Added books this month</div>
            <div className="text-2xl font-semibold">{statistics.newBooksThisMonth}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">Total transactions</div>
            <div className="text-2xl font-semibold">{statistics.allTransactions}</div>
            <div className="text-green-500">Transactions this month</div>
            <div className="text-2xl font-semibold">{statistics.transactionsThisMonth}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">Total users</div>
            <div className="text-2xl font-semibold">{statistics.allUsers}</div>
            <div className="text-green-500">New users this month</div>
            <div className="text-2xl font-semibold">{statistics.newUsersThisMonth}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-600">Total events</div>
            <div className="text-2xl font-semibold">{statistics.allEvents}</div>
            <div className="text-green-500">Events this month</div>
            <div className="text-2xl font-semibold">{statistics.eventsThisMonth}</div>
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
    </WrapBar>
  );
};

export default Dashboard;