const express=require("express");
const router =express.Router();
 
 
const FacatControllers = require("../Controllers/FactController");

router.post("/citation", FacatControllers.addFact)
module.exports= router;