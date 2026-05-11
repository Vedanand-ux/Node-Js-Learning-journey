const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req,res,next)=>{
  console.log("1st dummy middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("2st dummy  middleware",req.url,req.method);
  next();
});

app.get("/",(req,res,next)=>{
  console.log("HANDLING / FOR GET",req.url,req.method);
  res.send("<h1>WELCOME TO PRACTICE SET</h1>");
  next();
});

app.get("/contact-us",(req,res,next)=>{
  console.log("HANDLING /contact-us GET",req.url,req.method);
  res.send(
    `<h1>Please give us your details</h1>
    <form action = "/contact-us" method = "POST">
      <input type = "text" name = "name" placeholder="Enter your name "/>
      <input type = "email" name = "Email" placeholder="Enter your Email"/>
      <input type = "Submit"/>
    </form>
  `);
});

app.post("/contact-us",(req,res,next)=>{
  console.log("First handling",req.url,req.method,req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("HANDLING /contact-us FOR POST",req.url,req.method,req.body);
  res.send("<h1>WE'LL CONTACT YOU SHORTLY </h1>");
});


const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server is running on address http://localhost:${PORT}`);
})