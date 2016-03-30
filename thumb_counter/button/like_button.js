$("body").append("<div id='like_button'><img src='http://aboutmobile.github.io/thumb_counter/button/heart.svg' /></div>");
$("#like_button").click(function() {
  $.ajax({
    url: 'http://52.79.125.192:3000/count'
  })
})
