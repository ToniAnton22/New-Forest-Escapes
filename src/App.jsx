import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeownerHomepage from "./pages/homeowner/homepage/HomeownerHomepage"
import HomeownerSetEnergy from "./pages/homeowner/setenergy/HomeownerSetEnergy"
import HomeownerViewEnergy from "./pages/homeowner/viewenergy/HomeownerViewEnergy"
import HomeownerInstructions from "./pages/homeowner/instructions/HomeownerInstructions"
import HomeownerGenerateMeter from './pages/homeowner/generatemeter/HomeownerGenerateMeter';
import HomeownerCreateReadings from './pages/homeowner/createreadings/HomeownerCreateReadings';
import AgencyHomepage from "./pages/agency/homepage/AgencyHomepage"
import AgencyTotalCost from "./pages/agency/totalcost/AgencyTotalCost"
import AgencyNewHome from "./pages/agency/newhome/AgencyNewHome"
import VisitorHomepage from "./pages/visitor/homepage/VisitorHomepage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homeowner */}
        <Route exact path="/homeowner" element={<HomeownerHomepage />} />
        <Route exact path="/setenergy" element={<HomeownerSetEnergy />} />
        <Route exact path="/energyusage" element={<HomeownerViewEnergy />} />
        <Route exact path="/instructions" element={<HomeownerInstructions />} />
        <Route exact path="/generatemeter" element={<HomeownerGenerateMeter />} />
        <Route exact path="/createreadings" element={<HomeownerCreateReadings />} />
        {/* Agency  */}
        <Route exact path="/agency" element={<AgencyHomepage />} />
        <Route exact path="/totalcost" element={<AgencyTotalCost />} />
        <Route exact path="/newhome" element={<AgencyNewHome />} />
        {/* Visitor  */}
        <Route exact path="/visitor" element={<VisitorHomepage />} />
        <Route exact path="/totalcost" element={<AgencyNewHome />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
