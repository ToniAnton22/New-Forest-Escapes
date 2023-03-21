import React from 'react'
import './visitorentermeter.css'
import VisitorHeader from "../../../components/visitorheader/VisitorHeader"
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function VisitorEnterMeter() {
    return (
        <>
        <VisitorHeader/>
        <div className="visitorCreateReadingsContainer">
            <div className="visitorCreateReadingsLeft">
            <div className="visitorCreateReadingsBackground">
            <div className="visitorCreateReadingsTitle">
            CREATE METER READING
          </div>
          </div>
            </div>
            <div className="visitorCreateReadingsRight">
                <form className='visitorCreateReadingsForm'>
                    <label className='visitorCreateReadingsLabel'>
                        Home Address
                    </label>
                    <input type="text" className='visitorCreateReadingsInput'/>
                    <label className='visitorCreateReadingsLabel'>
                        Home Reference
                    </label>
                    <input type="text" className='visitorCreateReadingsInput'/>
                    <hr className='hr'/>
                    <label className='visitorCreateReadingsLabel'>
                        Pre Reading
                    </label>
                    <input type="text" className='visitorCreateReadingsInput' placeholder='Date & Time'/>
                    <input type="text" className='visitorCreateReadingsPicture'/>
                    <SubmitBtn/>
                    <hr className='hr'/>
                    <label className='visitorCreateReadingsLabel'>
                        Post Reading
                    </label>
                    <input type="text" className='visitorCreateReadingsInput' placeholder='Date & Time'/>
                    <input type="text" className='visitorCreateReadingsPicture'/>
                    <SubmitBtn/>
                </form>
            </div>
        </div>
        </>
      )
    }