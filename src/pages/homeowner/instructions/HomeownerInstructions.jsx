import './homeownerinstructions.css'
import React from 'react'
import Header from '../../../components/homeownerheader/Header'
import SubmitBtn from '../../../components/submitBtn/SubmitBtn'

export default function HomeownerInstructions() {
  return (
    <>
    <Header/>
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
