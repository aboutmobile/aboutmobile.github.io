var socket = io();

socket.on('count', function(totalLike) {
  $('#count').text(totalLike);
});

socket.on('counters', function(obj) {
  // $("#count").html(JSON.stringify(obj).replact);
  $("#count").html(JSON.stringify(obj, null, 2).replace(/\n/g, "<br>"))
})

$('#reset').click(function() {
  socket.emit('reset');
  return false;
})
