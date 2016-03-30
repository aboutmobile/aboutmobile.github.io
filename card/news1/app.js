var index = 0;
var numCards = 7;
$(document).ready(function() {
  var cardWidth = $('#cards').width();

  function flipForward() {
    if (index + 1 >= numCards)
      return;
    index++;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*14.285) + '%)');
    $('#current_index').text(index + 1);
  }

  function flipBackward() {
    if (index == 0)
      return;
    index--;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*14.285) + '%)');
    $('#current_index').text(index + 1);
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

  $("#back-button").click(function() {
    console.log('clk');
    window.location.href = "../index.html";
  })
})
