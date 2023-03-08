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
         <Route exact path="/VisitorsHomePage" element={<VisitorsHomePage />} />
         <Route exact path="/Prepostmeterreading" element={<Prepostmeterreading />} />
         </Routes>
    </BrowserRouter>
  )
}
export default App
