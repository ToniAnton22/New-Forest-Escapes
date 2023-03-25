import './agencycreatereading.css'
import React from 'react'
import AgencyHeader from '../../../components/agencyheader/AgencyHeader'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function AgencyCreateReading() {
    return (
        <>
        <AgencyHeader/>
        <div className="agencyCreateReadingsContainer">
            <div className="agencyCreateReadingsLeft">
            <div className="agencyCreateReadingsBackground">
            <div className="agencyCreateReadingsTitle">
            CREATE METER READING
          </div>
          </div>
            </div>
            <div className="agencyCreateReadingsRight">
                <form className='agencyCreateReadingsForm'>
                    <label className='agencyCreateReadingsLabel'>
                        Home Address
                    </label>
                    <input type="text" className='agencyCreateReadingsInput'/>
                    <label className='agencyCreateReadingsLabel'>
                        Home Reference
                    </label>
                    <input type="text" className='agencyCreateReadingsInput'/>
                    <hr className='hr'/>
                    <label className='agencyCreateReadingsLabel'>
                        Pre Reading
                    </label>
                    <input type="text" className='agencyCreateReadingsInput' placeholder='Date & Time'/>
                    <input type="text" className='agencyCreateReadingsPicture'/>
                    <SubmitBtn/>
                    <hr className='hr'/>
                    <label className='agencyCreateReadingsLabel'>
                        Post Reading
                    </label>
                    <input type="text" className='agencyCreateReadingsInput' placeholder='Date & Time'/>
                    <input type="text" className='agencyCreateReadingsPicture'/>
                    <SubmitBtn/>
                </form>
            </div>
        </div>
        </>
      )
    }
    
