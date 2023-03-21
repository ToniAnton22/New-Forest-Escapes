import './agencytotalcost.css'
import React from 'react'
import AgencyHeader from '../../../components/agencyheader/AgencyHeader'

export default function AgencyTotalCost() {
    return (
        <>
        <AgencyHeader/>
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
    
