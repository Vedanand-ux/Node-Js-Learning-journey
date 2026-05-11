//core module
// const http = require('http');
//local module
const requestHandler = require('./user');
//external module
const express = require('express');

const app = express();

app.get("/",(req,res,next)=>{
  console.log("came in first middleware" , req.url,req.method);
  next();
});

app.post("/submit-details",(req,res,next)=>{
  console.log("came in second middleware" , req.url,req.method);
  res.send('<p>WELCOME TO EXPRESS JS</p>')
});

app.use("/",(req,res,next)=>{
  console.log("came in another middleware" , req.url,req.method);
  res.send('<p>CAME FROM ANOTHER MIDDLEWARE</p>')
});



// const server = http.createServer(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});