import './homeownerviewenergy.css'
import React from 'react'
import Header from '../../../components/homeownerheader/Header'
import BufferBtn from '../../../components/bufferBtn/BufferBtn'
import QRCode from "react-qr-code";

export default function HomeownerViewEnergy() {
  return (
    <>
    <Header/>
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
