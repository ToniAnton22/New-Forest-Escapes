import './agencyhomepage.css'
import React from 'react'
import AgencyHeader from "../../../components/agencyheader/AgencyHeader"
import { Link } from "react-router-dom";
import { SlEnergy, SlSpeedometer, SlSettings, SlBookOpen, SlPencil, SlHome, SlCreditCard } from "react-icons/sl";

export default function AgencyHomepage() {
    return (
        <>
      <AgencyHeader/>
      <div className="agencyHomeContainer">
        <div className="agencyHomeImage">
          <div className="agencyHomeTitle">
            <h4 className="agencyHomeTitleText">WELCOME</h4>
            <p>AGENCY</p>
            {/* <p className="agencyHomeText">Choose one of the above options</p> */}
            
          </div>
        </div>
        <div className="agencyWrapper">
        <div className="agencyDashboardTop">
            <Link className="boxAgency" to="/setenergy"><div className="box-inside"><SlEnergy display="flex" size="3em"/><p>Set Energy Usage</p></div></Link>
            <Link className="boxAgency" to="/energyusage"><div className="box-inside"><SlBookOpen display="flex" size="3em"/><p>View Energy Usage</p></div></Link>
            <Link className="boxAgency" to="/instructions"><div className="box-inside"><SlSettings display="flex" size="3em"/><p>Instructions</p></div></Link>
            <Link className="boxAgency" to="/totalcost"><div className="box-inside"><SlCreditCard display="flex" size="3em"/><p>Total Cost</p></div></Link>
        </div>
        <div className="agencyDashboardBot">
        <Link className="boxAgency" to="/generatemeter"><div className="box-inside"><SlSpeedometer display="flex" size="3em"/><p>Meter Reading</p></div></Link>
        <Link className="boxAgency" to="/createreadings"><div className="box-inside"><SlPencil display="flex" size="2.5em"/><p>Create Meter Reading</p></div></Link>
        <Link className="boxAgency" to="/newhome"><div className="box-inside"><SlHome display="flex" size="2.5em"/><p>New Home</p></div></Link>
        </div>
        </div>
          {/* <div className="agencyHomeMain">
            
          <Link className="link" to="/setenergy"><div className="agencyHomeBox">Set Energy Usage</div></Link>
          <Link className="link" to="/energyusage"><div className="agencyHomeBox">View Energy Usage</div></Link>
          <Link className="link" to="/instructions"> <div className="agencyHomeBox">Instructions</div></Link>
          <Link className="link" to="/generatemeter"><div className="agencyHomeBox">Generate Meter Reading</div></Link>
          <Link className="link" to="/createreadings"><div className="agencyHomeBox">Meter Readings</div></Link>
          </div> */}
      </div>
      </>
      )
    }
