const express=require('express');
const router= express.Router()
const  Users =require('../model/users')
const _=require('lodash')
const bcrypt=require('bcrypt')
mongoose=require("mongoose")



router.post('/' ,async (req,res)=>{
    let user= await Users.findOne({email:req.body.email})
   if( !user ){
  return res.status(404).send("email ou password sont incorrects")
   }

     
const checkPassword= await bcrypt.compare(req.body.password,user.password)
  if( !checkPassword){
    return res.status(404).send("email ou password sont incorrects")
  
  }
try{
  let token=  user.generateTokens()

  //res.header('Set-Cookie',`token=${token}; HttpOnly`)
  res.cookie('token',token ,{
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  }).send(_.pick(user,['name','lastname','email','role']))
  

}
catch(e){
  console.log(e)}

  
})


module.exports = router