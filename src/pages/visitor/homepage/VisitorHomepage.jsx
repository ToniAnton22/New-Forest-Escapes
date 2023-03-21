import React from 'react'
import './visitorhomepage.css'
import VisitorHeader from "../../../components/visitorheader/VisitorHeader"
import { Link } from "react-router-dom";
import { SlSpeedometer, SlPencil, SlCreditCard } from "react-icons/sl";


export default function VisitorHomepage() {
    return (
        <>
      <VisitorHeader/>
      <div className="visitorHomeContainer">
        <div className="visitorHomeImage">
          <div className="visitorHomeTitle">
            <h4 className="visitorHomeTitleText">WELCOME</h4>
            <p>VISITOR</p>
          </div>
        </div>
        <div className="visitorWrapper">
        <div className="visitorDashboardTop">
            <Link className="box" to="/createreadings"><div className="box-inside"><SlPencil display="flex" size="2.5em"/><p>Create Meter Reading</p></div></Link>
            <Link className="box" to="/totalcost"><div className="box-inside"><SlCreditCard display="flex" size="3em"/><p>Total Cost</p></div></Link>
            <Link className="box" to="/generatemeter"><div className="box-inside"><SlSpeedometer display="flex" size="3em"/><p>Meter Reading</p></div></Link>
        </div>
        <div className="visitorDashboardBot">
        </div>
        </div>
      </div>
      </>
      )
    }
