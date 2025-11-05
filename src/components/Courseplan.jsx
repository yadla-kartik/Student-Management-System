import React, { useState } from 'react';

// Hardcoded data to populate the Courseplan table
const courseData = [
  { subject: 'Computer Graphics', subType: 'Theory' },
  { subject: 'Cryptography & Network Security', subType: 'Theory' },
  { subject: 'Compiler Design', subType: 'Theory' },
  { subject: 'Multimedia and Communication', subType: 'Theory' },
  { subject: 'Web Technology & Mobile Computing', subType: 'Theory' },
  { subject: 'Computer Graphics Lab', subType: 'Practical' },
  { subject: 'Cryptography & Network Security Lab', subType: 'Practical' },
  { subject: 'Virtual Lab (Android Lab)', subType: 'Practical' },
  { subject: 'Minor Project - II [ Angular, Node JS]', subType: 'Practical' },
];

const Courseplan = () => {
  // State to manage the active semester, simulating the selection
  const [activeSemester, setActiveSemester] = useState('Semester 6');

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Courseplan</h1>

      {/* --- Semester Tag Section --- */}
      <div className="mb-6">
        <span
          className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-md cursor-pointer 
            bg-red-50 border border-red-300 text-red-600 shadow-sm transition-colors"
          // In a real app, clicking this would change activeSemester state
          onClick={() => setActiveSemester('Semester 6')}
        >
          {activeSemester}
        </span>
        {/* You would map other semester options here */}
      </div>

      {/* --- Subject Table Container --- */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header Row (Light Purple Background) */}
            <thead className="bg-indigo-50/50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider w-3/5"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider w-1/5"
                >
                  Sub Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider w-1/5"
                >
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-100">
              {courseData.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  {/* Subject */}
                  <td className="px-6 py-3 whitespace-nowrap text-base text-gray-800 font-medium">
                    {course.subject}
                  </td>
                  {/* Sub Type */}
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                    {course.subType}
                  </td>
                  {/* Action Button */}
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-center">
                    <button
                      onClick={() => console.log(`Viewing details for: ${course.subject}`)}
                      className="inline-flex items-center px-3 py-1.5 border border-blue-400 text-blue-600 
                        text-sm font-medium rounded-lg shadow-sm bg-white hover:bg-blue-50 transition-colors focus:outline-none"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Courseplan;