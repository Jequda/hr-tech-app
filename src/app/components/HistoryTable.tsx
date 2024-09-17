import React from "react";

const HistoryTable = () => {
  return (
    <table className="min-w-full mt-6 bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="border-b p-2">Date</th>
          <th className="border-b p-2">Description</th>
          <th className="border-b p-2">Used Days (-)</th>
          <th className="border-b p-2">Earned Days (+)</th>
          <th className="border-b p-2">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b p-2">23/05/2024</td>
          <td className="border-b p-2">Accrual for 23/05/2024 to 20/11/2024</td>
          <td className="border-b p-2">-6</td>
          <td className="border-b p-2">3</td>
          <td className="border-b p-2">3.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HistoryTable;
