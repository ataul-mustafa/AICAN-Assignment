import React, { useState } from 'react'
import './Dashoboard.css'
import Class from './Class'
import Teacher from './Teacher'
import Student from './Student'

const Dashoboard = () => {
    const [curPage, setCurPage] = useState('Class')
  return (
    <div className='dashboardCont'>
      <h1>School management system</h1>
      <div>
        <h2 onClick={()=>{setCurPage('Class')}}
        className={curPage=='Class' ? 'curNav': ''}
        >Class</h2>
        <h2 onClick={()=>{setCurPage('Teacher')}}
        className={curPage=='Teacher' ? 'curNav': ''}
        >Teacher</h2>
        <h2 onClick={()=>{setCurPage('Student')}}
        className={curPage=='Student' ? 'curNav': ''}
        >Student</h2>
      </div>

      <div className='table'>
        {
            curPage == 'Class' ?
            <Class /> :
            curPage == 'Teacher' ?
            <Teacher />:
            <Student />
        }
      </div>
    </div>
  )
}

export default Dashoboard
