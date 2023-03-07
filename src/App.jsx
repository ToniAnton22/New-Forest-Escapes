import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeownerHomepage from "./pages/homeowner/homepage/HomeownerHomepage"
import HomeownerSetEnergy from "./pages/homeowner/setenergy/HomeownerSetEnergy"
import HomeownerViewEnergy from "./pages/homeowner/viewenergy/HomeownerViewEnergy"
import HomeownerInstructions from "./pages/homeowner/instructions/HomeownerInstructions"
import HomeownerGenerateMeter from './pages/homeowner/generatemeter/HomeownerGenerateMeter';
import HomeownerCreateReadings from './pages/homeowner/createreadings/HomeownerCreateReadings';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/homeowner" element={<HomeownerHomepage />} />
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
