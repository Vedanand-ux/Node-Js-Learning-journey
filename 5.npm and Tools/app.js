const http = require("http");

const server = http.createServer((req,res) =>{
  console.log(req);
});

const PORT = 3006;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
});