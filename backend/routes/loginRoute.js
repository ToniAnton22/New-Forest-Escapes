const express = require("express")
const router = express.Router()
const passaport = require('passport')
const User = require('../Model/Users')


router.get('/session', (req, res) => {
    if (req.session.views) {
      req.session.views++;
    } else {
      req.session.views = 1;
    }
  
    res.send(`You have visited this page ${req.session.views} times.`);
});

router.post('/login/user', passaport.authenticated('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,

}))

router.get('/logut', (req,res) =>{
    req.logOut();
    res.redirect('/')
})

router.post('/register',async (req,res)=>{

    try{
        const user = await User.insertOne({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.fName,
            last_name: req.body.lName,
            delegate: req.body.delegate,
            type: req.body.type
        })
        if(user.insertedCount === 1){
            res.status(200).send('Success')
        }else{
            res.status(403).send('Bad input/Server error')
        }
    }catch(e){
        res.status(500).send("Server error")
    }
})

router.get('/session',(req,res) =>{
    try{
        if(!req.locals){
            res.status(403).send('No sessions available')
        }else{
            res.json(req.locals)
        }
    }catch(e){
        res.json({message:"Server error"})
    }

})

module.exports = router