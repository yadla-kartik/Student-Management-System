import React, { useState } from 'react';

const ExamResult = () => {
  const [results] = useState([
    { id: 1, semester: 'Semester 1', year: 'Nov-Dec 2022-2023', type: 'Regular', hasResult: true, isRV: false },
    { id: 2, semester: 'Semester 2', year: 'April-May 2022-2023', type: 'Regular', hasResult: true, isRV: false },
    { id: 3, semester: 'Semester 3', year: 'Nov-Dec 2023-2024', type: 'Regular', hasResult: true, isRV: false },
    { id: 4, semester: 'Semester 4', year: 'April-May 2023-2024', type: 'Regular', hasResult: true, isRV: false },
    { id: 5, semester: 'Semester 2', year: 'April-May 2022-2023', type: 'RV', hasResult: true, isRV: true },
  ]);

  const handleViewResult = (id) => {
    console.log('View result for ID:', id);
    // Yaha tumhara result view logic aayega
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Exam Result</h2>

      {/* Section Header */}
      <div className="bg-cyan-100 text-cyan-600 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="font-semibold">Semester Exam Result</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">#</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Semester</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Year</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Type</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-gray-700">{row.id}</td>
                <td className="py-4 px-4 text-gray-700">{row.semester}</td>
                <td className="py-4 px-4 text-gray-700">{row.year}</td>
                <td className="py-4 px-4 text-gray-700">{row.type}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    {/* Download Icon */}
                    <button 
                      onClick={() => handleViewResult(row.id)}
                      className="text-pink-500 hover:text-pink-600 transition"
                      title="Download Result"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>

                    {/* RV Result Link */}
                    {row.isRV && (
                      <button 
                        onClick={() => handleViewResult(row.id)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition"
                      >
                        RV Result
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamResult;