const mongoose = require("mongoose")

const Schema = mongoose.schema

const usersSchema = new Schema({
  email: {
    type:String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
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
  },
  type: {
    type:String,
    required: true,
  }
})

module.exports = mongoose.model("Users", usersSchema)
