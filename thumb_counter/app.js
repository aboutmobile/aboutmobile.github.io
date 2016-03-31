var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

var counter = 0;

var counters = {};

app.get('/count', function(req, res) {
  res.json({ count: ++counter });
  io.emit('count', counter);
});

app.post('/count_source', function(req, res) {
  var src = req.body.source;
  if (counters[src] == undefined)
    counters[src] = 0;
  counters[src]++;
  console.log(counters);
  io.emit('counters', counters);
  res.sendStatus(200);
});

io.on('connection', function(socket) {
  io.emit('counters', counters);

  socket.on('reset', function() {
    counters = {};
    io.emit('counters', counters);
  })
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
