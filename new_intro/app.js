var index = 0;
var numCards = 5;
$(document).ready(function() {
  var cardWidth = $('#cards').width();
  function flipForward() {
    if (index + 1 >= numCards)
      return;
    index++;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*20) + '%)');
  }

  function flipBackward() {
    if (index == 0)
      return;
    index--;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*20) + '%)');
  }

  var cardsHammer = new Hammer(document.getElementById('cards'));
  cardsHammer.on('swipeleft', function() {
    console.log('swipeleft')
    flipForward();
  });
  cardsHammer.on('swiperight', function() {
    console.log('swiperight')
    flipBackward();
  });
})
