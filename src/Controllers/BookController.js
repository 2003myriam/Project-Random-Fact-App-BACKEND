const { Book } = require("../Models/BookModel");

class  BookController{
  /* _______adding________ */
  async addbooks(req,res){
  try {
  console.log(req.body);
  const{title, year }=req.body

  const newbook=await Book.insertOne({title,year})
  res.json({
    "message":"  Book is succesfully created",
    data:{
      title,year
    }
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
 
}
module.exports=new BookController