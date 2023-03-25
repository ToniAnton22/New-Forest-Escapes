import "./homeownerhomepage.css"
import Header from "../../../components/homeownerheader/Header"
import React from "react"
import { Link } from "react-router-dom";
import { SlEnergy, SlSpeedometer, SlSettings, SlBookOpen, SlPencil } from "react-icons/sl";

// import { Link } from "react-router-dom";

export default function HomeownerHomepage() {
  return (
    <>
  <Header/>
  <div className="homeownerHomeContainer">
    <div className="homeownerHomeImage">
      <div className="homeownerHomeTitle">
        <h4 className="homeownerHomeTitleText">WELCOME</h4>
        <p>HOMEOWNER</p>
        {/* <p className="homeownerHomeText">Choose one of the above options</p> */}
        
      </div>
    </div>
    <div className="homeownerWrapper">
    <div className="homeownerDashboardTop">
        <Link className="box" to="/setenergy"><div className="box-inside"><SlEnergy display="flex" size="3em"/><p>Set Energy Usage</p></div></Link>
        <Link className="box" to="/energyusage"><div className="box-inside"><SlBookOpen display="flex" size="3em"/><p>View Energy Usage</p></div></Link>
        <Link className="box" to="/instructions"><div className="box-inside"><SlSettings display="flex" size="3em"/><p>Instructions</p></div></Link>
    </div>
    <div className="homeownerDashboardBot">
    <Link className="box" to="/generatemeter"><div className="box-inside"><SlSpeedometer display="flex" size="3em"/><p>Meter Reading</p></div></Link>
    <Link className="box" to="/createreadings"><div className="box-inside"><SlPencil display="flex" size="2.5em"/><p>Create Meter Reading</p></div></Link>
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
