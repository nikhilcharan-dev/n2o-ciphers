import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section>
      <div className='coursesInfo'>
        <div className='coursesEnrolled'>Courses Enrolled</div>
        <div className='coursesOnGoing'>Courses On Going</div>
        <div className='coursesCompleted'>Courses Completed</div>
      </div>
       <div className='Progress'>
          <h1>Progress</h1>
          <div className='displayProgress'>
            <div className="courseCompletionProgress">
              <select className='courseSelector'>
                <option value="java">java</option>
                <option value="cpp">cpp</option>
                <option value="python">python</option>
                <option value="sql">sql</option>
              </select>
              <div>you completed python coures 75%</div>
            </div>
            <div className="tests">
              <div>test Participated : 0</div>
              <div>current Rating : student</div>
              <div>test Participated : 0</div>
            </div>
          </div>
       </div>
       <div className="continueButton">
          continue Learning
       </div>
       <div>
         <h1>Certfications</h1>
       </div>
    </section>
  );
};

export default Dashboard;
