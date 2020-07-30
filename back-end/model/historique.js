const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistoriqueSchema=new Schema({
name:{
    type:String
},
action:{
    type:String
},
reference:{
    type:String
},
image:{
    type:String 
},
user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"users"
   },
   date: {
    type: Date,
    default: Date.now
  }
   })

   


   module.exports = Historique= mongoose.model("historique", HistoriqueSchema);