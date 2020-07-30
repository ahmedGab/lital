const express = require("express");
const router = express.Router();
const authentification = require("../middelwares/auth");
const Historique=require("../model/historique")


router.post("/",authentification,async (req, res) => {
    const {name,action,reference,image} = req.body;
    try {
      historique= new Historique({
      name,
      reference,
      action,
      image
      });
      await historique.save();
      res.json(historique);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  },)  
router.get("/",async (req, res) => {
    try {
      const historiques= await Historique.find()
      res.json(historiques);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
},)
router.delete("/:id",authentification,async (req, res) => {
    try {
      await Historique.findByIdAndDelete(req.params.id);
      res.json("Hitorique deleted");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
}




)


  module.exports = router;