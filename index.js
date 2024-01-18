import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app=express();
const port=3000;
const API_URL="https://thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let data;
app.get("/", (req, res) => {
  res.render("index1.ejs",{content:data});
  });

  app.post("/recipe",async(req,res)=>{
    try{
    const result=await axios.get(API_URL);
     data=result.data;
    res.render("index1.ejs",{content:data})
    }catch(error){
      console.error("Failed to make request:", error.message);
      res.render("index1.ejs", {
        error: error.message, 
    })
    res.redirect('/');
  }
 
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })