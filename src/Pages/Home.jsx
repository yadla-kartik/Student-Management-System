// Home.jsx (Resolved)

import React from 'react';
import Profile from '../components/Profile'; // This was always present

// --- RESOLVED IMPORTS SECTION ---
import Attendance from '../components/Attendance'; // From 'add-fronted'
import Courseplan from '../components/Courseplan'; // From 'add-fronted'
import Fees from '../components/fees'; // From 'main'
import ExamResult from '../components/ExamResult'; // From 'main'
import ExamForm from '../components/ExamForm'; // From 'main'
// --------------------------------

function Home() {
  return (
    <>
      <Profile />

      {/* --- RESOLVED JSX SECTION --- */}
      <Attendance />
      <Courseplan />
      <Fees />
      <ExamForm />
      <ExamResult />
      {/* ---------------------------- */}
    </>
  );
}

export default Home;