$('#like_button').click(function() {
  $.ajax({
    url: 'http://localhost:3000/count'
  })
})
