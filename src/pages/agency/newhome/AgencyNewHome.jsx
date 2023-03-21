import './agencynewhome.css'
import React from 'react'
import AgencyHeader from '../../../components/agencyheader/AgencyHeader'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function AgencyNewHome() {
    return (
        <>
        <AgencyHeader/>
        <div className="agencyNewHomeContainer">
            <div className="agencyNewHomeLeft">
            <div className="agencyNewHomeBackground">
            <div className="agencyNewHomeTitle">
            NEW HOME
          </div>
          </div>
            </div>
            <div className="agencyNewHomeRight">
                <form className='agencyNewHomeForm'>
                    <label className='agencyNewHomeLabel'>
                        Homeowner Name
                    </label>
                    <input type="text" className='agencyNewHomeInput'/>
                    <label className='agencyNewHomeLabel'>
                        Home Address
                    </label>
                    <input type="text" className='agencyNewHomeInput'/>
                    <input type="text" className='agencyNewHomeInput'/>
                    <input type="text" className='agencyNewHomeInput'/>
                    <label className='agencyNewHomeLabel'>
                        Current Reading
                    </label>
                    <input type="text" className='agencyNewHomeInput'/>
                    <SubmitBtn/>
                    <div className="agencyNewHomeResult"></div>
                </form>
            </div>
        </div>
        </>
      )
    }
