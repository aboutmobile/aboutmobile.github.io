var h = document.querySelector(".heart")
h.addEventListener('click', function(e) {
  e.preventDefault();
  if ($(".heart").hasClass('heartAnimation')) {
    h.classList.remove("heartAnimation");
    h.offsetWidth = h.offsetWidth;
    h.classList.add("heartAnimation");
  } else {
    h.classList.toggle("heartAnimation");
  }
  var source = $(".heart").data('source');
  // $.ajax({
  //   url: 'http://52.79.125.192:3000/count'
  // })
  $.ajax({
    type: 'POST',
    url: 'http://52.79.125.192:3000/count_source',
    data: JSON.stringify ({"source": source}),
    contentType: "application/json",
    dataType: 'json'
  });

}, false);
