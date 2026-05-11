//app.js
//external module
const express = require('express');

//local Module
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);


const PORT = 3000;
app.listen(3000,()=>{
  console.log(`server is running at http://localhost:${PORT}/host`);
});

