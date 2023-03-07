import "./homeownerhomepage.css"
import Header from "../../../components/header/Header"
import React from "react"
// import { Link } from "react-router-dom";

export default function HomeownerHomepage() {
  return (
    <>
  <Header/>
  <div className="homeownerHomeContainer">
    <div className="homeownerHomeImage">
      <div className="homeownerHomeTitle">
        <h4 className="homeownerHomeTitleText">WELCOME</h4>
        <p className="homeownerHomeText">Choose one of the above options</p>
        
      </div>
    </div>
      {/* <div className="homeownerHomeMain">
        
      <Link className="link" to="/setenergy"><div className="homeownerHomeBox">Set Energy Usage</div></Link>
      <Link className="link" to="/energyusage"><div className="homeownerHomeBox">View Energy Usage</div></Link>
      <Link className="link" to="/instructions"> <div className="homeownerHomeBox">Instructions</div></Link>
      <Link className="link" to="/generatemeter"><div className="homeownerHomeBox">Generate Meter Reading</div></Link>
      <Link className="link" to="/createreadings"><div className="homeownerHomeBox">Meter Readings</div></Link>
      </div> */}
  </div>
  </>
  )
}
