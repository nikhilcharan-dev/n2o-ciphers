import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section>
      <div className='coursesInfo'>
        <div className='coursesEnrolled'>coursesEnrolled</div>
        <div className='coursesEnrolled'>coursesOnGoing</div>
        <div className='coursesEnrolled'>coursesCompleted</div>
      </div>
       <div className='Progress'>
          <h1>Progress</h1>
          <div className='displayProgress'>
            <div className="courseCompletionProgress">
              <select className='courseSelector'>
                <option value="course1">course1</option>
                <option value="course2">course2</option>
                <option value="course3">course3</option>
                <option value="course4">course4</option>
              </select>
              <div>you completed course1 75%</div>
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
