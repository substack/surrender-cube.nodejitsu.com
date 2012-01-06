var http = require('http');
var cube = require('surrender-cube');
var charm = require('charm');

http.createServer(function (req, res) {
    cube({ charm : charm(req, res) });
}).listen(8080);
