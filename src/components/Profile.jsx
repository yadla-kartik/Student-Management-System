import React from 'react'

function Profile() {
  return (
    <>
        <div className='w-7/12 h-auto flex flex-col'>
            <div className='bg-violet-300 text-indigo-800 font-medium'>
                <p>Personal Information</p>
            </div>
            <div>
                <img className=' bg-cover w-34 h-auto border border-black' src="" alt="Profile" />
                <div>
                    <p>Student's Picture</p>
                    <p>Upload Image</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile