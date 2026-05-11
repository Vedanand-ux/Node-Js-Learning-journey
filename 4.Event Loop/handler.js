const sumRequestHandler= require('./adding');

const requestHandler = (req,res) =>{

  if(req.url === '/'){
  console.log(req.url,req.method);

    res.write('<html>');
    res.write('<head><title>CALCULATOR</title></head>');
    res.write('<body><h1>WELCOME TO THE CALCULATOR</h1>');
    res.write('<a href="/calculator">CLICK TO GET INTO CALC</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
    else if(req.url === '/calculator'){
    res.write('<html>');
    res.write('<head><title>CALCULATOR</title></head>');
    res.write('<body><h1>CALCULATOR</h1>');
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type = "number" name="number1" placeholder="Enter 1st Number"/><br><br>');
    res.write('<input type = "number" name="number2" placeholder="Enter 2st Number"/><br><br>');
    res.write('<button type = "submit" value = "sum"> Submit</button>')
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }

    else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
      return sumRequestHandler(req,res);
    }

    res.write('<html>');
    res.write('<head><title>CALCULATOR</title></head>');
    res.write('<body><h1>404 not found</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

}

module.exports = requestHandler;