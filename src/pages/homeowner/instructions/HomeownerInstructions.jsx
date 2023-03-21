import './homeownerinstructions.css'
import React from 'react'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function HomeownerInstructions() {
  const navigate = useNavigate();
  return (
    <>
    <div className="homeownerInstructionsContainer">
        <div className="homeownerInstructionsLeft">
        <div className="homeownerInstructionsBackground">
        <div className="homeownerInstructionsTitle">
        INSTRUCTIONS
      </div>
      </div>
        </div>
        <div className="homeownerInstructionsRight">
            <form className='homeownerInstructionsForm'>
            <Link className="" onClick={() => navigate(-1)}><IoHome size="3em" color="black"/></Link>
                <label className='homeownerInstructionsLabel'>
                    Home Reference
                </label>
                <input type="text" className='homeownerInstructionsInput'/>
                <label className='homeownerInstructionsLabel'>
                    Home Address
                </label>
                <input type="text" className='homeownerInstructionsInput'/>
                <input type="text" className='homeownerInstructionsInput'/>
                <input type="text" className='homeownerInstructionsInput'/>
                <label className='homeownerInstructionsLabel'>
                    Instructions
                </label>
                <input type="text" className='homeownerInstructionsInput'/>
                <input type="text" className='homeownerInstructionsInput'/>
                <input type="text" className='homeownerInstructionsInput'/>
                <SubmitBtn/>
            </form>
        </div>
    </div>
    </>
  )
}
