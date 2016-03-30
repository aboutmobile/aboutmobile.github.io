var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

var counter = 0;
app.get('/count', function(req, res) {
  res.json({ count: ++counter });
  io.emit('count', counter);
});

io.on('connection', function(socket) {
  io.emit('count', counter);

  socket.on('reset', function() {
    counter = 0;
    io.emit('count', counter);
  })
})

http.listen(3000, function(){
	console.log('listening on *:3000');
});
