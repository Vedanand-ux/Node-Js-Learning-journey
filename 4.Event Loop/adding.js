const sumRequestHandler = (req,res) =>{
  console.log("1. IN SUM REQUEST HANLDER",req.url);

      const body = [];
      let result=0;
      req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
        console.log("2.CHUNK CAME");
      });

      req.on('end',()=>{
      console.log("3.RESPONSE ENDED");
       const fullBody = Buffer.concat(body).toString();
       console.log(fullBody);

       const params = new URLSearchParams(fullBody);

       const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      result = Number(bodyObject.number1)+Number(bodyObject.number2);
      console.log(result);
    });
    console.log("4.SENDIG RESPONSE PAGE");
    res.write('<html>');
    res.write('<head><title>CALCULATOR</title></head>');
    res.write(`<body><h1>CALCULATOR RESULT = ${result}</h1>`);
    res.write('<a href = "/">HOME</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    
};

module.exports = sumRequestHandler
// exports.sumRequestHandler = sumRequestHandler;