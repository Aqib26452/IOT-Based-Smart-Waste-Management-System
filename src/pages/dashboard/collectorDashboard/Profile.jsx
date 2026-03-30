import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Aqib Shaahzad",
    email: "As@gmail.com",
    phone: "0320000000",
    dob: "2025-09-12",
    education: "Bachelor",
    department: "IT",
    position: "Developer",
    experience: "2",
    address: "abnvcqdjkvchqdjs,chdw",
    profilePic: null,
  });

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={
                user.profilePic
                  ? user.profilePic
                  : "https://via.placeholder.com/80?text=Profile"
              }
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-white"
            />

            {/* Upload Button */}
            <label
              htmlFor="profileUpload"
              className="absolute bottom-0 right-0 bg-white text-gray-600 p-1 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100"
            >
              ✎
            </label>

            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.phone}</p>
          </div>
        </div>

        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
          Edit Profile
        </button>
      </div>

      {/* Info Sections */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Personal Info */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Full Name</span>
              <span className="text-gray-800">{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Date of Birth</span>
              <span className="text-gray-800">{user.dob}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Education</span>
              <span className="text-gray-800">{user.education}</span>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Department</span>
              <span className="text-gray-800">{user.department}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Position</span>
              <span className="text-gray-800">{user.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Experience</span>
              <span className="text-gray-800">{user.experience} Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white shadow-md rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Phone</span>
            <span className="text-gray-800">{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Address</span>
            <span className="text-gray-800">{user.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
