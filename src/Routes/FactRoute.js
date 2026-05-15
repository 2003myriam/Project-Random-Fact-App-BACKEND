const express=require("express");
const router =express.Router();
 
 
const FacatControllers = require("../Controllers/FactController");

router.post("/citation", FacatControllers.addFact)
router.get("/findallcitation/:BookId/random",FacatControllers.AllCitationOfSameBook);
module.exports= router;


/*   const value = Math.random(); 
    res.json({ randomNumber: value }); */