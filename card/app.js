// global index value
var index = 0;
var numCards = 15;
$(document).ready(function() {
  // insert image to DOM
  for (var i = 0; i < numCards; i++) {
    var imgString = '<div class="card"><img class="card-img" src="'
    var imgSrc = 'pics/' + (i+1) + '.png'
    $("#wrapper").append(imgString + imgSrc + '" /></div>')
  }

  // get window width
  var cardWidth = $('#cards').width();
  $('.card').width(cardWidth);
  $('#wrapper').width(cardWidth * numCards);

  $('#cards').height(cardWidth);

  function flipForward() {
    if (index + 1 >= numCards)
      return;
    index++;
    $('#wrapper').css('left', -cardWidth*index + 'px');
  }

  function flipBackward() {
    if (index == 0)
      return;
    index--;
    $('#wrapper').css('left', -cardWidth*index + 'px');
  }

  $('#cards').click(function() {
    flipForward();
  })

  var cardsHammer = new Hammer(document.getElementById('cards'));
  cardsHammer.on('swipeleft', function() {
    flipForward();
  })
  cardsHammer.on('swiperight', function() {
    flipBackward();
  })
})
