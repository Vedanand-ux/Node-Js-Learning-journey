const http = require('http');
const requestHandler = require('./handler');

const server = http.createServer(requestHandler);



const PORT = 3005;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
});