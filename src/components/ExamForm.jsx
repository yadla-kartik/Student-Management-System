import React, { useState } from 'react';

const ExamForm = () => {
  const [examForms] = useState([
    { id: 1, exam: 'Semester Exam', year: 'Nov-Dec2024-2025' },
    { id: 2, exam: 'Semester Exam', year: 'April-May2023-2024' },
    { id: 3, exam: 'Semester Exam', year: 'Nov-Dec2023-2024' },
    { id: 4, exam: 'Semester Exam', year: 'April-May2021-2022' },
    { id: 5, exam: 'Semester Exam', year: 'April-May2022-2023' },
    { id: 6, exam: 'Semester Exam', year: 'Nov-Dec2022-2023' },
  ]);

  const handleView = (id) => {
    console.log('View exam form:', id);
    // Yaha tumhara view form logic aayega
  };

  const handleViewSubmitted = () => {
    console.log('View submitted forms');
    // Yaha submitted forms view logic aayega
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Exam Form</h2>
        <button 
          onClick={handleViewSubmitted}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition"
        >
          View Submitted Form
        </button>
      </div>

      {/* Section Header */}
      <div className="bg-pink-100 text-pink-500 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span className="font-semibold">Semester Exam Form</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">#</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Exam</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Year</th>
              <th className="text-left py-3 px-4 text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {examForms.map((form) => (
              <tr key={form.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-gray-700">{form.id}</td>
                <td className="py-4 px-4 text-gray-700">{form.exam}</td>
                <td className="py-4 px-4 text-gray-700">{form.year}</td>
                <td className="py-4 px-4">
                  <button 
                    onClick={() => handleView(form.id)}
                    className="border-2 border-cyan-400 text-cyan-500 hover:bg-cyan-50 px-6 py-1 rounded font-medium transition"
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
  );
};

export default ExamForm;