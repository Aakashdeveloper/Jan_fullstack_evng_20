var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.write("<h1>Hi from http</h1>")
    res.end();
})
