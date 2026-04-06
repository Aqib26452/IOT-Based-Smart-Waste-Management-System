import React from 'react'
import { Search, Bell, Settings } from "lucide-react";

const TasksManagement = () => {
  return (
     <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
        {/* Header */}
  <div className="flex justify-between items-center mb-6">

    {/* Left */}
    <h1 className="text-2xl text-2xl font-bold text-green-600 mb-6">Tasks Management</h1>

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Tasks", value: 128 },
          { title: "Assigned Tasks", value: 42 },
          { title: "Pending Tasks", value: 86 },
           { title: "Complete Tasks", value: 29 },
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

<div className="bg-white p-6 rounded-xl">

  {/* TOP ROW */}
  <div className="flex justify-between items-center">

    {/* LEFT */}
    <div>
      <h1 className="text-2xl font-semibold text-black">Tasks</h1>
      <p className="text-sm text-gray-400 mt-1">
        32 active tasks
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
        + Assign new task
      </button>

    </div>
  </div>

  {/* TABS */}
  <div className="flex gap-6 mt-5 border-b">

    <button className="pb-2 text-sm font-medium text-[#80A615] border-b-2 border-[#80A615]">
      Assigned
    </button>

    <button className="pb-2 text-sm text-gray-500 hover:text-black">
      On the way
    </button>

    <button className="pb-2 text-sm text-gray-500 hover:text-black">
      In Progress
    </button>

     <button className="pb-2 text-sm text-gray-500 hover:text-black">
      Complete
    </button>

  </div>

</div>
      </div>

  )
}

export default TasksManagement
