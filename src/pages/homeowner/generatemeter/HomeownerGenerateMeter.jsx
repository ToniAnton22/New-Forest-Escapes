import './homeownergeneratemeter.css'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function HomeownerGenerateMeter() {
    const navigate = useNavigate();
  return (
    <>
    <div className="homeownerGenerateMeterContainer">
        <div className="homeownerGenerateMeterLeft">
        <div className="homeownerGenerateMeterBackground">
        <div className="homeownerGenerateMeterTitle">
        GENERATE METER READING
      </div>
      </div>
        </div>
        <div className="homeownerGenerateMeterRight">
            <form className='homeownerGenerateMeterForm'>
            <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
                <label className='homeownerGenerateMeterLabel'>
                    Image
                </label>
                <input type="text" className='homeownerGenerateMeterPicture'/>
                <label className='homeownerGenerateMeterLabel'>
                    Date
                </label>
                <input type="text" className='homeownerGenerateMeterInput'/>
                <label className='homeownerGenerateMeterLabel'>
                    Time
                </label>
                <input type="text" className='homeownerGenerateMeterInput'/>
                <label className='homeownerGenerateMeterLabel'>
                    Reading Numbers
                </label>
                <input type="text" className='homeownerGenerateMeterInput'/>
            </form>
        </div>
    </div>
    </>
  )
}
