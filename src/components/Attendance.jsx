import React from 'react';

// Hardcoded data structure to match the UI's empty state
const attendanceData = {
  totalLectures: 0,
  totalPresent: 0,
  attendancePercentage: 0,
  subjectReports: [], // The table data is empty in your image
};

const Attendance = () => {
  const { totalLectures, totalPresent, attendancePercentage, subjectReports } = attendanceData;

  // Function to render the top summary cards
  const renderSummaryCard = (title, value, unit, bgColor, textColor, icon) => (
    <div className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${bgColor} w-full lg:w-1/3`}>
      <div className="flex justify-between items-center w-full">
        <div className={`flex flex-col ${textColor}`}>
          <span className="text-sm font-semibold uppercase">{title}</span>
          <span className="text-2xl font-bold mt-1">
            {value} {unit}
          </span>
        </div>
        <div className={`text-4xl ${textColor}`}>{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Attendance</h1>

      {/* --- Top Summary Cards --- */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {renderSummaryCard(
          'Total Lectures',
          totalLectures,
          "Lectures's",
          'bg-white border-t-4 border-yellow-400',
          'text-yellow-600',
          <span role="img" aria-label="document">📄</span>
        )}
        {renderSummaryCard(
          'Total Present',
          totalPresent,
          "Present's",
          'bg-white border-t-4 border-blue-400',
          'text-blue-600',
          <span role="img" aria-label="people">👥</span>
        )}
        {renderSummaryCard(
          'Attendance Percentage',
          `${attendancePercentage}%`,
          "",
          'bg-white border-t-4 border-green-400',
          'text-green-600',
          <span role="img" aria-label="checked person">✅</span>
        )}
      </div>

      {/* --- Student's Attendance Report Table --- */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Table Header/Title Row (Red/Pink Background) */}
        <div className="bg-red-100 p-3">
          <h2 className="text-base font-semibold text-red-700">Student's Attendance Report</h2>
        </div>

        {/* Table Structure */}
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  S no.
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Subjects
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Present
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Lectures
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* This section will be populated with a .map() call for real data */}
              {subjectReports.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-4 py-4 text-sm text-gray-500 text-center">
                    {/* No data available to match the empty state in your image */}
                  </td>
                </tr>
              ) : (
                // Example of how data would be mapped (currently not rendered)
                subjectReports.map((report, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.subject}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.present}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.total}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.percentage}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;