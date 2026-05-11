//homeRouter.js
//core Module
const path = require('path');
//external module
const express = require('express');
//local module
const rootDir = require('../utils/pathUtil');

const homeRouter = express.Router();

homeRouter.get("/",(req,res)=>{
  console.log(req.url,req.method);
  res.sendFile(path.join(rootDir,'Views','home.html'));
});

module.exports = homeRouter;
