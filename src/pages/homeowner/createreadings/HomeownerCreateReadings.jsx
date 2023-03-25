import './homeownercreatereadings.css'
import React from 'react'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function HomeownerCreateReadings() {
    const navigate = useNavigate();
  return (
    <>
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
            <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
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
                <input type="text" className='homeownerCreateReadingsInput' placeholder='Date & Time'/>
                <input type="text" className='homeownerCreateReadingsPicture'/>
                <SubmitBtn/>
                <hr className='hr'/>
                <label className='homeownerCreateReadingsLabel'>
                    Post Reading
                </label>
                <input type="text" className='homeownerCreateReadingsInput' placeholder='Date & Time'/>
                <input type="text" className='homeownerCreateReadingsPicture'/>
                <SubmitBtn/>
            </form>
        </div>
    </div>
    </>
  )
}
