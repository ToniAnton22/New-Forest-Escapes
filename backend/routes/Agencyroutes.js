const express = require("express")
const router = express.Router();
const Agency = require("../Model/Agency")

router.get("/add-agency", (req,res) =>{
    const agency = new Agency({ 
      agencyName: "TestAgencyname2",  //just to test, need to replased by .body
      agentName: "TestAgentname",
      Readings: "22",
      Total_Cost: "11"
    })
  
    agency.save()
    .then((result) =>{
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  module.exports = router