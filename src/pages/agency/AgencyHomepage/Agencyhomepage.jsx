import "./agency.css"
import Header from "/Users/erinlynch/new-forest-escapes-1/src/Components/header/header"
import React from "react"
// import { Link } from "react-router-dom";

export default function HomeownerHomepage() {
  return (
    <>
      <Header />
      <div className="homeownerHomeContainer">
        <div className="homeownerHomeImage">
          <div className="homeownerHomeTitle">
            <h4 className="homeownerHomeTitleText">WELCOME</h4>
            <p className="homeownerHomeText">Choose one of the above options</p>
          </div>
        </div>
        {/* <div className="homeownerHomeMain">
        
      <Link className="link" to="/addbufferamount"><div className="homeownerHomeBox">Set Energy Usage</div></Link>
      <Link className="link" to="/addinstructions"><div className="homeownerHomeBox">View Energy Usage</div></Link>
      <Link className="link" to="/generatemeterreading"> <div className="homeownerHomeBox">Instructions</div></Link>
      <Link className="link" to="/newhomeprofile"><div className="homeownerHomeBox">Generate Meter Reading</div></Link>
      <Link className="link" to="/prepostmeterreading"><div className="homeownerHomeBox">Meter Readings</div></Link>
      </div> */}
      </div>
    </>
  )
}
