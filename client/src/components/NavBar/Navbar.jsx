import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Navbar() {
  const [currPage, setCurrPage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const setSectionColor = (changedTo)=>{
      setCurrPage(changedTo);
      // changing page
      console.log(changedTo);
      navigate('/' + changedTo.toLowerCase());
  }

  return (
      <section>
          <nav className="navbar" >
              <div className="navbar-brand">
                  <div className="logo"/>
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
                          <BurgerMenu />
                          :
                          <li className="navSection" onClick={() => navigate('login')} >login</li>
                  }
              </ul>
          </nav>

          <Outlet />
      </section>
  )
}
