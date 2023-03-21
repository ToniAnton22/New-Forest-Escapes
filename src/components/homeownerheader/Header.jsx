import "./header.css"
import React from "react"
// import { faCentercode } from "@fortawesome/free-brands-svg-icons"
// import { FaTimes, FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
      }
    
      const hideNavbar = () =>{
        navRef.current.classList.remove("responsive_nav")
      }

  return (
    <div className="top">
      <div className="topLeft">
      {/* <FontAwesomeIcon icon={faCentercode} className="topIcon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCentercode} className="topIcon"></FontAwesomeIcon> */}
      </div>
      <div className="topCenter">
        <ul className="topList"ref={navRef}>
          <li className="topListItem"><Link className="link" to="/homeowner">Home</Link></li>
          <li className="topListItem"><Link className="link" to="/setenergy">Set Energy Usage</Link></li>
          <li className="topListItem"><Link className="link" to="/energyusage">View Energy Usage</Link></li>
          <li className="topListItem"><Link className="link" to="/instructions">Instructions</Link></li>
          <li className="topListItem"><Link className="link" to="/generatemeter">Meter Reading</Link></li>
          <li className="topListItem"><Link className="link" to="/createreadings">Create Meter Reading</Link></li>
          {/* <li className="topListItem">{"LOGOUT"}</li> */}
          <button className ="nav-btn nav-close-btn" onClick={hideNavbar}>
          {/* <FaTimes /> */}
          </button>
          </ul>
      </div>
      <div className="topRight">
      <button className ="nav-btn" onClick={showNavbar}>
          {/* <FaBars /> */}
          </button>
      <li className="topListItem"><Link className="link" to="/myaccount">My Account</Link></li>
      </div>
    </div>
  )
}
