$(".col1").click(function() {
  $(".fake").toggleClass("active");
})

$(document).ready(function() {
  var windowWidth = $(window).innerWidth();
  var windowHeight = $(window).innerHeight();
  $("#cover-wrapper").height(windowHeight - windowWidth / 2);
})
