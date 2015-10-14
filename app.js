var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express['static']('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket){
  console.log("client connected");
  socket.emit('message', {message: "ようこそ"});
    socket.on('add message', function(e){
      io.emit('message added', e);
    });
});

server.listen(process.env.PORT || 8888);
