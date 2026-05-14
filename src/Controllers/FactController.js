const {Fact} = require("../Models/FactModel");

class  FactController{
  /* _______adding________ */
  async addFact(req,res){
  try {
  console.log(req.body);
  const{ citation,BookId}=req.body

  const newbook=await Fact.insertOne({citation,BookId})
  res.json({
    "message":"   citation is succesfully created",
    data:{
      citation,BookId
    }
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
 
}
module.exports=new FactController