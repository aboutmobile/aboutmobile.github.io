var socket = io();

socket.on('count', function(totalLike) {
  $('#count').text(totalLike);
});

$('#reset').click(function() {
  socket.emit('reset');
  return false;
})
