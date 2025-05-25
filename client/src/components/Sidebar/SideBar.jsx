import React from 'react';
import { useNavigate } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const logUserOut = () => {
        navigate('/login');
        localStorage.clear();
    }

    return (
        <div className="sidebar">
            <a onClick={() => navigate(`/user-profile`)} className="menu-item">My Profile</a>
            <a onClick={() => navigate('/change-password')} className="menu-item">Change password</a>
            <a onClick={() => navigate('my-certificates')} className="menu-item">Certificates</a>
            <a onClick={logUserOut} className="menu-item logout">logout</a>
        </div>
    );
};

export default Sidebar;
