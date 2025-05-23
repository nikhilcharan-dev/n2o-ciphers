import React ,{useState} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [currPage, changePage] = useState("Home");
  const setSectionColor = (changedTo)=>{
    let curr=document.querySelector(`#${currPage}`);
    curr.style.backgroundColor="rgb(13,12,77)";
    changePage(`${changedTo}`);
    let changed=document.querySelector(`#${changedTo}`);
    changed.style.backgroundColor="rgb(226,195,131)";
  }
  return (
    <div className="navbar" >
      <div className="logo" ></div>
      <div className="title" >
        N2O ciphers Bounty Nation
      </div>
      <div className="navSections">
        <div id="Home" className="navSection" onClick={()=>setSectionColor("Home")}>Home</div>
        <div id="Explore" className="navSection" onClick={()=>setSectionColor("Explore")}>Explore</div>
        <div id="GIGTrack" className="navSection" onClick={()=>setSectionColor("GIGTrack")}>GIG track</div>
        <div id="Test" className="navSection" onClick={()=>setSectionColor("Test")}>Test</div>
        <div id="About" className="navSection" onClick={()=>setSectionColor("About")}>About</div>
        <div id="LoginIcon" className="navSection" onClick={()=>setSectionColor("LoginIcon")}>login icon</div>
      </div>
    </div>
  )
}
