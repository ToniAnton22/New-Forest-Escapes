const mongoose = require("mongoose")

const Schema = mongoose.schema

const usersSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  delegated: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Users", usersSchema)
