import './homeownerviewenergy.css'
import React from 'react'
import BufferBtn from '../../../components/bufferBtn/BufferBtn'
import QRCode from "react-qr-code";
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HomeownerViewEnergy() {
    const navigate = useNavigate();
  return (
    <>
    <div className="homeownerViewEnergyContainer">
        <div className="homeownerViewEnergyLeft">
        <div className="homeownerViewEnergyBackground">
        <div className="homeownerViewEnergyTitle">
        ENERGY USAGE
      </div>
      </div>
        </div>
        <div className="homeownerViewEnergyRight">
            <form className='homeownerViewEnergyForm'>
            <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
                <label className='homeownerViewEnergyLabel'>
                    Home Address
                </label>
                <input type="text" className='homeownerViewEnergyInput'/>
                <label className='homeownerViewEnergyLabel'>
                    Energy Used
                </label>
                <input type="text" className='homeownerViewEnergyInput'/>
                <label className='homeownerViewEnergyLabel'>
                    Buffer Amount
                </label>
                <BufferBtn/>
                <label className='homeownerViewEnergyDelegate'>
                    Delegate Ability
                </label>
                <input type="text" className='homeownerViewEnergyInput'/>
                <QRCode 
        style={{ height: "auto", maxWidth: "100px", width: "100px", marginTop: "16px" }}
        value='google.com'/>
            </form>
        </div>
    </div>
    </>
  )
}
