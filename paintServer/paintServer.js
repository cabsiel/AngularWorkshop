var http = require('http');
var url = require('url');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    var fileName = './resources' + q.pathname;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    fs.readFile(fileName, function(err, data){
        console.log(fileName);
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
    });
}).listen(8080);