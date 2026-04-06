import React from 'react'
import { Search, Bell, Settings } from "lucide-react";
import {
  Line,
  Bar
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
const CollectorsManagement = () => {
  return (
       <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
        {/* Header */}
  <div className="flex justify-between items-center mb-6">

    {/* Left */}
    <h1 className="text-2xl text-2xl font-bold text-green-600 mb-6">Collectors Management</h1>

    {/* Right */}
    <div className="flex items-center gap-4">

      {/* Search Bar */}
      <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search here..."
          className="ml-2 outline-none text-sm bg-transparent"
        />
      </div>

      {/* User Name */}
      <span className="text-sm font-medium text-gray-700">
        John Doe
      </span>

      {/* Notification Icon */}
     <div className="relative cursor-pointer">
      <Bell size={18} />
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </div>

      {/* Settings Icon */}
      <div className="bg-white p-2 rounded-full shadow cursor-pointer">
        <Settings size={18} />
      </div>

    </div>
  </div>


      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { title: "Total Collectors", value: 128 },
          { title: "Present Collectors", value: 42 },
          { title: "Absent Collectors", value: 86 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-xl font-bold">{item.value}</h2>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              ✓
            </div>
          </div>
        ))}
      </div>

{/* Charts Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

  {/* Line Chart */}
  <div className="bg-white p-4 rounded-xl shadow col-span-2">
    <div className="flex justify-between mb-3">
      <h3 className="font-semibold">Attendance Comparison</h3>
      <div className="text-sm text-gray-400">Daily</div>
    </div>

    <Line
      data={{
        labels: ["1 Aug","2","3","4","5","6","7","8","9"],
        datasets: [
          {
            label: "Attendance",
            data: [60,70,65,80,90,75,85,70,60],
            borderColor: "#80A615",
            backgroundColor: "rgba(128,166,21,0.2)",
            tension: 0.4,
            fill: true
          }
        ]
      }}
      options={{ responsive: true }}
    />
  </div>

  {/* Bar Chart */}
  <div className="bg-white p-4 rounded-xl shadow">
    <h3 className="font-semibold mb-3">Weekly Attendance</h3>

    <Bar
      data={{
        labels: ["Mon","Tue","Wed","Thu","Fri"],
        datasets: [
          {
            data: [50,60,85,70,55],
            backgroundColor: [
              "#E5E7EB",
              "#E5E7EB",
              "#111827",
              "#E5E7EB",
              "#E5E7EB"
            ]
          }
        ]
      }}
    />
  </div>

</div>

<div className="bg-white p-6 rounded-xl">

  {/* TOP ROW */}
  <div className="flex justify-between items-center">

    {/* LEFT */}
    <div>
      <h1 className="text-2xl font-semibold text-black">Collectors</h1>
      <p className="text-sm text-gray-400 mt-1">
        32 active Collectors
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-3">

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-[250px]">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by vehicle number, driver etc."
          className="ml-2 text-sm bg-transparent outline-none w-full"
        />
      </div>

      {/* Button */}
      <button className="bg-[#FFC437] hover:opacity-90 text-black px-4 py-2 rounded-lg font-medium">
        + Add new Collector
      </button>

    </div>
  </div>

  {/* TABS */}
  <div className="flex gap-6 mt-5 border-b">

    <button className="pb-2 text-sm font-medium text-[#80A615] border-b-2 border-[#80A615]">
      All Collectors
    </button>

    <button className="pb-2 text-sm text-gray-500 hover:text-black">
      Flow
    </button>

    <button className="pb-2 text-sm text-gray-500 hover:text-black">
      Reports
    </button>

  </div>
{/* Employees Table */}
<div className="bg-white p-6 rounded-xl shadow">

  <h3 className="font-semibold mb-4">All Employees</h3>

  <table className="w-full text-sm">
    <thead>
      <tr className="text-gray-400 text-left border-b">
        <th className="py-2">Name</th>
        <th>Type</th>
        <th>Role</th>
        <th>Contact</th>
        <th>Department</th>
        <th>Phone</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody className="text-gray-700">

      <tr className="border-b">
        <td className="py-2">Muhammad Ahsan</td>
        <td><span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Permanent</span></td>
        <td>Driver</td>
        <td>Call | Email</td>
        <td>Administration</td>
        <td>0311-1234567</td>
        <td><span className="text-green-600">● Working</span></td>
      </tr>

      <tr className="border-b">
        <td className="py-2">Ahmed Nawaz</td>
        <td><span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Permanent</span></td>
        <td>Driver</td>
        <td>Call | Email</td>
        <td>Management</td>
        <td>0322-9876543</td>
        <td><span className="text-yellow-500">● Break</span></td>
      </tr>

      <tr>
        <td className="py-2">Imran Ali</td>
        <td><span className="bg-gray-200 px-2 py-1 rounded">Part-time</span></td>
        <td>Sweeper</td>
        <td>Call | Email</td>
        <td>Cleaning</td>
        <td>0300-5558888</td>
        <td><span className="text-red-500">● Off Duty</span></td>
      </tr>

    </tbody>
  </table>

</div>
</div>
      </div>
  )
}

export default CollectorsManagement
