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
async AllCitationOfSameBook(req,res){
  try {
  console.log(req.body);
 

  
/* _______Avoir toutes les citations du meme livre________ */
const bookId = req.params.BookId;
const findbookcitation = await Fact.find({ BookId: bookId });
/* _______Avoir a random citation a chaque clique dans ce livre_______ */
const randomItem = findbookcitation[Math.floor(Math.random() * findbookcitation.length)];

  res.json({
    "message":" the citation is :",
    data:
        randomItem.citation
    
  })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message)
  }
}
 
}
module.exports=new FactController