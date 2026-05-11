//contactRouter.js
//core Module
const path = require('path');
//external Module
const express = require('express');
//local module
const rooDir = require('../utils/pathUtil');

const contactRouter = express.Router();

contactRouter.get("/contact-us",(req,res,next)=>{
  console.log(req.url,req.method);
  res.sendFile(path.join(rootDir,'Views','contact-us.html'));
});

contactRouter.post("/contact-us",(req,res,next)=>{
  console.log(req.body,req.url,req.method);
  res.sendFile(path.join(rootDir,'Views','contact-success.html'));
});

module.exports = contactRouter;