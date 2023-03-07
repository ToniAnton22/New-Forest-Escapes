import './homeownersetenergy.css'
import React from 'react'
import Header from '../../../components/header/Header'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function HomeownerSetEnergy() {
  return (
    <>
    <Header/>
    <div className="homeownerSetEnergyContainer">
        <div className="homeownerSetEnergyLeft">
        <div className="homeownerSetEnergyBackground">
        <div className="homeownerSetEnergyTitle">
        SET ENERGY
      </div>
      </div>
        </div>
        <div className="homeownerSetEnergyRight">
            <form className='homeownerSetEnergyForm'>
                <label className='homeownerSetEnergyLabel'>
                    Current kWh Rate
                </label>
                <input type="text" className='homeownerSetEnergyInput'/>
                <label className='homeownerSetEnergyLabel'>
                    Energy Used
                </label>
                <input type="text" className='homeownerSetEnergyInput'/>
                <label className='homeownerSetEnergyLabel'>
                    Home Reference
                </label>
                <input type="text" className='homeownerSetEnergyInput'/>
                <label className='homeownerSetEnergyLabel'>
                    Home Address
                </label>
                <input type="text" className='homeownerSetEnergyInput'/>
                <input type="text" className='homeownerSetEnergyInput'/>
                <input type="text" className='homeownerSetEnergyInput'/>
                <SubmitBtn/>
            </form>
        </div>
    </div>
    </>
  )
}
