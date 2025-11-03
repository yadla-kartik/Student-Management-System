import React, { useState } from 'react';

const TransactionsDetail = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [activeSubTab, setActiveSubTab] = useState('fees');

  const feesData = [
    { semester: '1 Semester', totalFee: 40700, feePaid: 40700, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '2 Semester', totalFee: 39050, feePaid: 39050, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '3 Semester', totalFee: 39300, feePaid: 39300, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '4 Semester', totalFee: 39050, feePaid: 39050, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '5 Semester', totalFee: 39300, feePaid: 39300, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '6 Semester', totalFee: 39050, feePaid: 39050, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '7 Semester', totalFee: 40300, feePaid: 40300, remaining: 0, lateFee: 0, status: 'Paid' },
    { semester: '8 Semester', totalFee: 40550, feePaid: 1000, remaining: 39550, lateFee: 0, status: 'Partially Paid' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h1 className='text-xl text-gray-700 mb-6'>Fee Detail</h1>
        
      {/* Header */}
      <h2 className="text-lg font-bold text-gray-800 mb-6">Transactions Detail</h2>

      {/* Main Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('academic')}
          className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
            activeTab === 'academic'
              ? 'bg-white text-cyan-500 border-2 border-cyan-400'
              : 'bg-cyan-100 text-cyan-600'
          }`}
        >
          Academic Transaction
        </button>
        <button
          onClick={() => setActiveTab('exam')}
          className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
            activeTab === 'exam'
              ? 'bg-white text-cyan-500 border-2 border-cyan-400'
              : 'bg-cyan-100 text-cyan-600'
          }`}
        >
          Exam Transaction
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveSubTab('fees')}
          className={`px-4 py-2 font-medium transition ${
            activeSubTab === 'fees'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
        >
          Fees Record
        </button>
        <button
          onClick={() => setActiveSubTab('transaction')}
          className={`px-4 py-2 font-medium transition ${
            activeSubTab === 'transaction'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
        >
          Transaction
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Semester</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Total Fee</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Fee Paid</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Remaining Fee</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Late Fee</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">#</th>
            </tr>
          </thead>
          <tbody>
            {feesData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{row.semester}</td>
                <td className="py-3 px-4 text-gray-700">{row.totalFee}</td>
                <td className="py-3 px-4 text-gray-700">{row.feePaid}</td>
                <td className="py-3 px-4 text-gray-700">{row.remaining}</td>
                <td className="py-3 px-4 text-gray-700">{row.lateFee}</td>
                <td className="py-3 px-4">
                  {row.status === 'Paid' ? (
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      Paid
                    </span>
                  ) : (
                    <span className="bg-orange-400 text-white px-3 py-1 rounded-md text-sm font-medium">
                      Partially Paid
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  {row.status === 'Paid' ? (
                    <button className="text-emerald-500 hover:text-emerald-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium">
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsDetail;