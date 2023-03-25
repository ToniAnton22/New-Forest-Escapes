require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
mongoose.set("strictQuery", false)
const agencyroutes = require("./routes/Agencyroutes")

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.set("view engine", "ejs")

//database connection

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err))

// agency routes
app.use(agencyroutes)
