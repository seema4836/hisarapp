const http = require('http'); // import module http using require () function
//const data = require('./index.js');   // import 
//console.log(data(4,5)); 


var server = http.createServer(function(req, res){
	console.log("Congrats!, Node Js is running on Port 8000");
    res.write("Welcome Ekarma haryanaaaa ");
   res.end();

});

server.listen(8000); 
