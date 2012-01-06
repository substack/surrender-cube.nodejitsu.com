var http = require('http');
var cube = require('surrender-cube');
var charm = require('charm');

http.createServer(function (req, res) {
    var iv = cube({ charm : charm(req, res) });
    
    req.connection.on('end', function () {
        clearInterval(iv);
    });
}).listen(8080);
