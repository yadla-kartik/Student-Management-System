import React from 'react'
import Profile from '../components/Profile'
import Fees from '../components/Fees'
import ExamResult from '../components/ExamResult'
import ExamForm from '../components/ExamForm'

function Home() {
  return (
        <>
       
            <Profile/>
            <Fees/>
            <ExamForm/>
            <ExamResult/>
        </>
  )
}

export default Home