import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 p-4 bg-gray-100">
      <img
        src="/profile-pic.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-center font-semibold mt-4">
        Alexandra Kuibyshevskaya
      </h2>
      <p className="text-center text-gray-600">Operations, London, UK</p>
      <div className="mt-4 space-y-2">
        <div>Hire Date: Sep 3, 2020</div>
        <div>Full-Time</div>
        <div>Direct Reports: Shane, Nathan, etc.</div>
      </div>
    </div>
  );
};

export default Sidebar;
