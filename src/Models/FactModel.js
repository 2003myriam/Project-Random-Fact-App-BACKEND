const mongoose =require("mongoose")

const factSchema=new mongoose.Schema({
  citation:{type: String , required:true},
  created_at:{type:Date , default:Date.now()},

  /* one book to many articles so id of the one in the many  */
  BookId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Book"
    }
})
const Fact=mongoose.model("Fact",factSchema)
module.exports = {Fact}