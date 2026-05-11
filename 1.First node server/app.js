const http = require("http");
const fs = require("fs");

function requestListener(req,res){
  console.log(req.url,req.headers ,req.method);

  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>MYNTRA</title></head>');
    res.write('<body><h1>SHOPPING APP</h1>');
    res.write('<body><h1>WELCOME TO THE HOME</h1></body>');
    res.write('<a href="home"> HOME</a><br><br>');
    res.write('<a href="men"> MEN</a><br><br>');
    res.write('<a href="women"> WOMEN</a><br><br>');
    res.write('<a href="kid"> KIDS</a><br><br>');
    res.write('<a href="cart"> CART</a><br><br>');

    res.write('</body>');
    res.write('</html>');
    res.end();
    return;
  }else if(req.url === '/home'){
  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  
  res.write('<a href="home"> HOME</a><br><br>');
  res.write('<a href="men"> MEN</a><br><br>');
  res.write('<a href="women"> WOMEN</a><br><br>');
  res.write('<a href="kid"> KIDS</a><br><br>');
  res.write('<a href="cart"> CART</a><br><br>');
  res.write('</HTML>');
  return res.end();
  }
  else if(req.url === '/men'){
  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  res.write('<body><h1>CHECK OUT OUR MEN SECTION</h1></body>');
  res.write('<a href="home"> HOME</a><br><br>');
    
    res.write('<a href="women"> WOMEN</a><br><br>');
    res.write('<a href="kid"> KIDS</a><br><br>');
    res.write('<a href="cart"> CART</a><br><br>');
  res.write('</HTML>');
  return res.end();
  }
  else if(req.url === '/women'){
  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  res.write('<body><h1>CHECK OUT OUR WOMEN SECTION</h1></body>');
  res.write('<a href="home"> HOME</a><br><br>');
    res.write('<a href="men"> MEN</a><br><br>');
    
    res.write('<a href="kid"> KIDS</a><br><br>');
    res.write('<a href="cart"> CART</a><br><br>');
  res.write('</HTML>');
  return res.end();
  }
  else if(req.url === '/kid'){
  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  res.write('<body><h1>CHECK OUT OUR kIDS SECTION</h1></body>');
  res.write('<a href="home"> HOME</a><br><br>');
    res.write('<a href="men"> MEN</a><br><br>');
    res.write('<a href="women"> WOMEN</a><br><br>');
    
    res.write('<a href="cart"> CART</a><br><br>');
  res.write('</HTML>');
  return res.end();
  }
  else if(req.url === '/cart'){
  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  res.write('<body><h1>HERE IS YOUR CART</h1></body>');
  res.write('<a href="home"> HOME</a><br><br>');
    res.write('<a href="men"> MEN</a><br><br>');
    res.write('<a href="women"> WOMEN</a><br><br>');
    res.write('<a href="kid"> KIDS</a><br><br>');
   
  res.write('</HTML>');
  return res.end();
  }

  res.setHeader('Content-Type','text/HTML');
  res.write('<HTML>');
  res.write('<head><title>MYNTRA</title></head>');
  res.write('<body><h1>404 PAGE NOT FOUND</h1></body>');
  res.write('</HTML>');
  res.end();


  
}

const server = http.createServer(requestListener);

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server is running in http://localhost:${PORT}`);
});