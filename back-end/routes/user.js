const express=require('express');
const router= express.Router()
const  Users =require('../model/users')
const _=require('lodash')
const bcrypt=require('bcrypt')
mongoose=require("mongoose")
const auth=require('../middelwares/auth')
const { route } = require('./logout');



router.get('/profil',auth,async(req,res)=>{
let profil=await Users.findById(req.user._id).select('-password')
res.send(profil)


})
router.post('/' ,async (req,res)=>{
    let user= await Users.findOne({email:req.body.email})
   if( user ){
  return res.status(404).send("cet email existe")
   }

     user=new Users(_.pick(req.body,['name','lastname','email','password','role']))
     const saltRounds = 10;
user.password= await bcrypt.hash(user.password,saltRounds)
        await user.save();
        let token=user.generateTokens()
       res.send(_.pick(user,['name','lastname','email']))
       
  
})
router.get('/' ,async (req,res)=>{
let user=await Users.find()
  
            res.json(user)
       
    })
    router.get('/:id' ,async (req,res)=>{

        try {
                let user=await Users.findById(req.params.id)

                res.send(user)
        } catch (error) {
                res.send("user not found")
        }
})
router.delete('/:id' ,async(req,res)=>{
let deletedUser=await Users.findByIdAndRemove(req.params.id)
  
        res.json(deletedUser)
   
})
router.put('/:id',async(req,res)=>{
   await Users.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    
    res.send("updated")

})

module.exports = router