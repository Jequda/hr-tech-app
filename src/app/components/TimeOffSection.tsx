import React from "react";

const TimeOffSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Time Off</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="font-semibold text-gray-700">Sick</h3>
          <p className="text-2xl font-bold">3</p>
          <p>Days Available</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="font-semibold text-gray-700">Annual Leave</h3>
          <p className="text-2xl font-bold">10.3</p>
          <p>Days Available</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="font-semibold text-gray-700">Comp/Leave Time</h3>
          <p className="text-2xl font-bold">0</p>
          <p>Days Available</p>
        </div>
      </div>
    </div>
  );
};

export default TimeOffSection;
