var express = require('express');
var routes = require('routes');
var http = require("http");
//var url = require('url');
//var fs = require('fs');

var app=express(); 
var server = app.listen(8080);

var io = require('socket.io').listen(server, { log: false });  
app.use('/', express.static(__dirname + '/public/'));  
app.set("views",__dirname+'/public');  
app.get("/",function(req,res){
    res.sendfile('index.html'); 
});

var clients = {};
io.sockets.on('connection', function(socket){    
	//recieve client data
	socket.on('trackBall', function(data){ 
		socket.broadcast.emit('trackBallResponse', data);
	}); 
	socket.on('trackPlayer', function(data){ 
		socket.broadcast.emit('trackPlayerResponse', data);
	}); 
	socket.on('trackScore', function(data){ 
		socket.broadcast.emit('trackScoreResponse', data);
	}); 
}); 
 