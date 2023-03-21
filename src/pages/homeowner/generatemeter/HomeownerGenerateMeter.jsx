import './homeownergeneratemeter.css'
import React from 'react'
import Header from '../../../components/homeownerheader/Header'

export default function HomeownerGenerateMeter() {
  return (
    <>
    <Header/>
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
