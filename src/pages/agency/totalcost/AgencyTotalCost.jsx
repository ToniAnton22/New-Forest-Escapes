import './agencytotalcost.css'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function AgencyTotalCost() {
    const navigate = useNavigate();
    return (
        <>
        <div className="agencyTotalCostContainer">
            <div className="agencyTotalCostLeft">
            <div className="agencyTotalCostBackground">
            <div className="agencyTotalCostTitle">
            TOTAL COST
          </div>
          </div>
            </div>
            <div className="agencyTotalCostRight">
                <form className='agencyTotalCostForm'>
                <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
                    <label className='agencyTotalCostLabel'>
                        Home Reference
                    </label>
                    <input type="text" className='agencyTotalCostInput'/>
                    <label className='agencyTotalCostLabel'>
                        Booking ID
                    </label>
                    <input type="text" className='agencyTotalCostInput'/>
                    <button className='agencyTotalCostBtn'>Calculate</button>
                    <div className="agencyTotalCostResult"></div>
                </form>
            </div>
        </div>
        </>
      )
    }
    
