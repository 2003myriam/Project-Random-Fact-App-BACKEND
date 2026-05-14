const express=require("express");
const router =express.Router();
 
 
const BookControllers = require("../Controllers/BookController");

router.post("/book", BookControllers.addbooks)
module.exports= router;