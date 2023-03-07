import './homeownercreatereadings.css'
import React from 'react'
import Header from '../../../components/header/Header'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function HomeownerCreateReadings() {
  return (
    <>
    <Header/>
    <div className="homeownerCreateReadingsContainer">
        <div className="homeownerCreateReadingsLeft">
        <div className="homeownerCreateReadingsBackground">
        <div className="homeownerCreateReadingsTitle">
        CREATE METER READING
      </div>
      </div>
        </div>
        <div className="homeownerCreateReadingsRight">
            <form className='homeownerCreateReadingsForm'>
                <label className='homeownerCreateReadingsLabel'>
                    Home Address
                </label>
                <input type="text" className='homeownerCreateReadingsInput'/>
                <label className='homeownerCreateReadingsLabel'>
                    Home Reference
                </label>
                <input type="text" className='homeownerCreateReadingsInput'/>
                <hr className='hr'/>
                <label className='homeownerCreateReadingsLabel'>
                    Pre Reading
                </label>
                <input type="text" className='homeownerCreateReadingsInput'/>
                <input type="text" className='homeownerCreateReadingsPicture'/>
                <SubmitBtn/>
                <hr className='hr'/>
                <label className='homeownerCreateReadingsLabel'>
                    Post Reading
                </label>
                <input type="text" className='homeownerCreateReadingsInput'/>
                <input type="text" className='homeownerCreateReadingsPicture'/>
                <SubmitBtn/>
            </form>
        </div>
    </div>
    </>
  )
}
