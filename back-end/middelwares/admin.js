module.exports=function (req,res,next){

    if(req.user.role==="user"){
   
     return res.send("not admin")
    }
    next()

    
    }