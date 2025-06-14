import React from 'react'

export default function Profile() {
  return (
    <div className='LearnerProfile'>
      <div className='personalInfo'>
        <h1>Personal Info</h1>
        <div className='LearnerDetails'>
          here
          <ul className="personalInfoList">
            <li>Name :</li>
            <li>Organisation :</li>
            <li>Email :</li>
            <li>Phone Number :</li>
            <li>Linkedin :</li>
            <li>Github :</li>
          </ul>
          <div className='pic'>
            <div className='ProfilePic'></div>
            <button>uploadPhoto</button>
          </div>
        </div>
      </div>
      <div>
      <ul className="Skills"></ul>
          <h1>Skills</h1>
        <ul className="skillsList">
          <li>cpp :</li>
          <li>java :</li>
          <li>python :</li>
          <li>sql :</li>
        </ul>
      </div>
      <div className='EducationalInfo'>
        <ul className="EducationalInfoList">
          <h1>Degree</h1>
          <li>intermediate :</li>
          <li>class 10 :</li>
        </ul>
      </div>
      <button className='editButton'>edit Profile</button>
      
    
    </div>
  )
}
