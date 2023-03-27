import "./App.css"
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeownerHomepage from "./pages/homeowner/homepage/HomeownerHomepage"
import HomeownerSetEnergy from "./pages/homeowner/setenergy/HomeownerSetEnergy"
import HomeownerViewEnergy from "./pages/homeowner/viewenergy/HomeownerViewEnergy"
import HomeownerInstructions from "./pages/homeowner/instructions/HomeownerInstructions"
import HomeownerGenerateMeter from './pages/homeowner/generatemeter/HomeownerGenerateMeter';
import HomeownerCreateReadings from './pages/homeowner/createreadings/HomeownerCreateReadings';


function App() {
  const [user, setUser] = useState()

  useEffect(() =>{
    axios.get('/loginru/session').then(res =>{
      setUser(res.data)
    })
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeownerHomepage user={user} />} />
        <Route exact path="/setenergy" element={<HomeownerSetEnergy />} />
        <Route exact path="/energyusage" element={<HomeownerViewEnergy />} />
        <Route exact path="/instructions" element={<HomeownerInstructions />} />
        <Route exact path="/generatemeter" element={<HomeownerGenerateMeter />} />
        <Route exact path="/createreadings" element={<HomeownerCreateReadings />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
