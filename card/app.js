$(".col1").click(function() {
  $(".fake").toggleClass("active");
  setTimeout(function() {
    $(".fake").toggleClass("active");
  }, 1000);
})

$(document).ready(function() {
  var windowWidth = $(window).innerWidth();
  var windowHeight = $(window).innerHeight();
  $("#cover-wrapper").height(windowHeight - windowWidth / 2);
  $('.subBox').click(function() {
    $(this).addClass('active');
  })
})
