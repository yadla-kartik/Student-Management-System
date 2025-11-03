import React, { useState } from 'react';

const PersonalInformation = () => {
  const [studentData, setStudentData] = useState({
    studentId: 'BE220013438',
    name: 'YADLA KARTIK',
    fatherName: 'YADLA VENKAT RAMANA',
    motherName: 'YADLA KRISHNA VENI',
    course: 'B Tech',
    branch: 'Information Technology Engineering',
    sem: 'Semester 6',
    section: 'A',
    profileImage: null,
    ClassRollNo: 25,
Academicyear:2022-2023,
Enroll : "CC1348",
Rollno:
301403322013,
DOB :
"21-05-2004",
Gender:
"Male",
BloodGroup: "O+",
Phone:
8109788772,
Email:
"ykarthik204@gmail.com",
Address: null,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData({ ...studentData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="bg-blue-100 text-blue-700 px-4 py-3 rounded-t-lg mb-6">
        <h2 className="text-lg font-semibold">Personal Information</h2>
      </div>

      <div className="flex gap-8">
        {/* Left Side - Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-3 border-4 border-gray-300">
            {studentData.profileImage ? (
              <img 
                src={studentData.profileImage} 
                alt="Student" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="bg-cyan-500 text-white px-4 py-1 rounded text-sm font-medium mb-2">
            Student's Picture
          </div>
          
          <label className="border-2 border-rose-400 text-rose-400 px-4 py-2 rounded cursor-pointer hover:bg-rose-400 hover:text-white transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Update Image
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Right Side - Information */}
        <div className="flex-1 space-y-5">
          {/* Student ID */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Student Id:</div>
            <div className="text-gray-800">{studentData.studentId}</div>
          </div>

          {/* Name */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Your Name:</div>
            <div className="text-gray-800">{studentData.name}</div>
          </div>

          {/* Father's Name */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Father's Name:</div>
            <div className="text-gray-800">{studentData.fatherName}</div>
          </div>

          {/* Mother's Name */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Mother's Name:</div>
            <div className="text-gray-800">{studentData.motherName}</div>
          </div>

          {/* Course */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Course:</div>
            <div className="text-gray-800">{studentData.course}</div>
          </div>

          {/* Branch */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Branch:</div>
            <div className="text-gray-800">{studentData.branch}</div>
          </div>

          {/* Semester */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Sem:</div>
            <div className="text-gray-800">{studentData.sem}</div>
          </div>

          {/* Section */}
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Section:</div>
            <div className="text-gray-800">{studentData.section}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Class Roll No:</div>
            <div className="text-gray-800">{studentData.ClassRollNo}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Academic Year:</div>
            <div className="text-gray-800">{studentData.Academicyear}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Enroll:</div>
            <div className="text-gray-800">{studentData.Enroll}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Roll No:</div>
            <div className="text-gray-800">{studentData.Rollno}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">DOB:</div>
            <div className="text-gray-800">{studentData.Rollno}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Gender:</div>
            <div className="text-gray-800">{studentData.Gender}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Blood Group:</div>
            <div className="text-gray-800">{studentData.BloodGroup}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Phone:</div>
            <div className="text-gray-800">{studentData.Phone}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Email:</div>
            <div className="text-gray-800">{studentData.Email}</div>
          </div>
          <div className="flex">
            <div className="w-40 text-gray-600 font-medium">Address:</div>
            <div className="text-gray-800">{studentData.Address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;