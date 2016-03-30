var index = 0;
var numCards = 11;
$(document).ready(function() {
  var cardWidth = $('#cards').width();

  function alertEdge() {
    $("#progress").toggleClass("alert");
    setTimeout(function() {
      $("#progress").toggleClass("alert");
    }, 350);
  }

  function flipForward() {
    if (index + 1 >= numCards) {
      alertEdge();
      return;
    }
    index++;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*9.09) + '%)');
    $('#current_index').text(index + 1);
  }

  function flipBackward() {
    if (index == 0) {
      alertEdge();
      return;
    }
    index--;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*9.09) + '%)');
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
    window.location.href = "../index_nocover.html";
  })
})
