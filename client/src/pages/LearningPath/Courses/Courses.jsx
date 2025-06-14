import React from 'react'

export default function Courses() {
  return (
      <div className='coursesInfo'>
        <div className='enrollNewCourses'>
          <h1>Enroll New Courses</h1>
          <ul className='newCoures'>
            <li className="java">java</li>
            <li className="cpp">cpp</li>
            <li className="python">python</li>
            <li className="sql">sql</li>
          </ul>
        </div>
        <div className='coursesEnrolled'>
          <h1>Courses Enrolled</h1>
          <ul className='Enrolled'>
            <li className="java">java</li>
            <li className="cpp">cpp</li>
            <li className="python">python</li>
            <li className="sql">sql</li>
          </ul>
        </div>
        <div className='coursesOnGoing'>
          <h1>Courses On Going</h1>
            <ul className='OnGoing'>
              <li className="java">java</li>
              <li className="cpp">cpp</li>
              <li className="python">python</li>
              <li className="sql">sql</li>
            </ul>
        </div>
        <div className='coursesCompleted'>
          <h1>Courses Completed</h1>
            <ul className='Completed'>
              <li className="java">java</li>
              <li className="cpp">cpp</li>
              <li className="python">python</li>
              <li className="sql">sql</li>
            </ul>
        </div>
      </div>
  )
}
