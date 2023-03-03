const mongoose = require("mongoose")

const Schema = mongoose.schema

const agencySchema = new Schema({
  agencyName: {
    type: String,
    required: true,
  },
  agentName: {
    type: String,
    required: true,
  },
  Readings: {
    type: Number,
    required: true,
  },
  Total_Cost: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Agency", agencySchema)
