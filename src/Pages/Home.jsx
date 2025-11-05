import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Profile from '../components/Profile'
import Attendance from '../components/Attendance'
import Courseplan from '../components/Courseplan'

function Home() {
  return (
        <>
            <SideNavbar/>
            <Profile/>
            <Attendance />
            <Courseplan />
        </>
  )
}

export default Home