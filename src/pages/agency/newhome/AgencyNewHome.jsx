import './agencynewhome.css'
import React from 'react'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function AgencyNewHome() {
    const navigate = useNavigate();
    return (
        <>
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
                <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
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
