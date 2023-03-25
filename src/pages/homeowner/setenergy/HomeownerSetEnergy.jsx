import './homeownersetenergy.css'
import React from 'react'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function HomeownerSetEnergy() {
    const navigate = useNavigate();
  return (
    <>
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
            <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
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
