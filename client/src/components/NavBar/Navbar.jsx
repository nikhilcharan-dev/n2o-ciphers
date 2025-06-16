import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Navbar.css'

import BurgerMenu from '../BurgerMenu/BurgerMenu'
import SideBar from "../Sidebar/SideBar.jsx";

export default function Navbar() {
  const [currPage, setCurrPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem('loggedIn') === "true"
  );

  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const setSectionColor = (changedTo)=>{
      setCurrPage(changedTo);
      // changing page
      console.log(changedTo);
      navigate('/' + changedTo.toLowerCase());
  }

  console.log(isLoggedIn);

  return (
      <section>
          <nav className="navbar" >
              <div className="navbar-brand">
                  <img src="/images/Logo.jpg" className="logo" alt="login-logo"/>
                  <div className="title">
                      N2O Ciphers Bounty Nation
                  </div>
              </div>

              <ul className="navSections">
                  <li id={ `${currPage === "" ? "active" : ""}`} className="navSection" onClick={()=>setSectionColor("")}>Home</li>
                  <li id={ `${currPage === "Explore" ? "active" : ""}`}  className="navSection" onClick={()=>setSectionColor("Explore")}>Explore</li>
                  <li id={ `${currPage === "GIG-Track" ? "active" : ""}`} className="navSection" onClick={()=>setSectionColor("GIG-Track")}>GIG track</li>
                  <li id={ `${currPage === "Test" ? "active" : ""}`} className="navSection" onClick={()=>setSectionColor("Test")}>Test</li>
                  <li id={ `${currPage === "About" ? "active" : ""}`}  className="navSection" onClick={()=>setSectionColor("About")}>About</li>
                  {
                      isLoggedIn ?
                          <BurgerMenu setToggleMenu={setToggleMenu} />
                          :
                          <li className="navSection underline" onClick={() => navigate('login')} >login</li>
                  }
              </ul>
          </nav>
          { toggleMenu && <SideBar /> }
          <Outlet />
      </section>
  )
}
