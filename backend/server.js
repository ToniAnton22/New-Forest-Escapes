require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const session = require('express-session');
const cookieParser = require('cookie-parser');
mongoose.set("strictQuery", false)
const agencyroutes = require("./routes/Agencyroutes")
const loginRoutes = require('./routes/loginRoute')
const passaport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./Model/Users')

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.set("view engine", "ejs")

//database connection

mongoose
  .connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err))

// agency routes
app.use(agencyroutes)
app.use('/loginru',loginRoutes)
// Set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Set up the session
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
  },
}));

passaport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async function (email,password,done){
  try{
    const user = await User.findOne({email: email})
    if(!user){
      return done(null, false,{message:'Incorrect email or password'})
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch){
      return done(null,false,{message:'Incorrect email or password'})
    }
    return done(null, user)
  }catch(e){
    return done(e)
  }
}
))

app.use((req,res,next) =>{
  res.session.user = req.user
  next()
})

passaport.serializeUser(function(user, done){
  done(null, user.id, user.status)
})

passaport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err,user)
  })
})

app.use(passaport.initialize())
app.use(passaport.session())