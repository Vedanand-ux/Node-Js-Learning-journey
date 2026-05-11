const http = require('http');
const testingSyntax = require('./syntax');
const logical = require('./logical');

const server = http.createServer((req,res) =>{
  console.log(req.url,req.method);
  //testingSyntax();
  logical();
});

const PORT = 3008;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});