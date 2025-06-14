import {useState,React} from "react";
import './LearningPath.css';
import {Outlet,useNavigate} from 'react-router-dom';

const  LearningPath = () => {
    const [curPage,changePage]=useState("");
    const navigateTo = useNavigate();
    function setPage(changedTo){
        navigateTo('/learning-path/'+changedTo);
        changePage(changedTo);
    }
    return (
        <div className="Learner">
            <div className="learningSidebar">
                <ul className="sidebarSections">
                    <li id={curPage==="DashBoard"?"active":""} className="DashBoard" onClick={()=>setPage("dashboard")}>DashBoard</li>
                    <li id={curPage==="DashBoard"?"active":""} className="Courses" onClick={()=>setPage("courses")}>Courses</li>
                    <li id={curPage==="DashBoard"?"active":""} className="Earn" onClick={()=>setPage("earn")}>Earn</li>
                    <li id={curPage==="DashBoard"?"active":""} className="Profile" onClick={()=>setPage("profile")}>Profile</li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}

export default LearningPath;