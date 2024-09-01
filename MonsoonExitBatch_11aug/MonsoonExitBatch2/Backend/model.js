//Write missing code here
const mongoose=require("mongoose");
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const model=mongoose.model('blog',schema);
module.exports=model

