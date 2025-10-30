import React from 'react'

function SideNavbar() {
  return (
    <>
        <div className='w-32 h-screen'>
            <div className='border border-zinc-600'>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Profile</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Attendance</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>CT Marks</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Course Plan</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Grievance</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Library</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Fee</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Examform</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Result</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Notices</p>
                <p className='flex flex-col items-left mt-6 text-sm text-gray-700 '>Logout</p>
            </div>
        </div>
    </>
  )
}

export default SideNavbar