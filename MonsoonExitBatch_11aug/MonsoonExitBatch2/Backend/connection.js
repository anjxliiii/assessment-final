const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect('mongodb+srv://Anjxliiiii:ammu2002@cluster0.a72eyma.mongodb.net/internDB?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
   
 } )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
