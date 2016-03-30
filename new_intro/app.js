// Insert youtube iframe API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    window.location.href = "http://www.google.com";
  }
}

var index = 0;
var numCards = 5;
$(document).ready(function() {
  var cardWidth = $('#cards').width();
  $('#bullets .bullet:nth-child(' + (index+1) + ')').css('background-color', 'blue');

  function changeBullet(idx) {
    for (var i = 0; i < 5; i++) {
      $('#bullets .bullet:nth-child(' + (i+1) + ')').css('background-color', 'red');
    }
    $('#bullets .bullet:nth-child(' + (idx+1) + ')').css('background-color', 'blue');
  }

  function flipForward() {
    if (index + 1 >= numCards)
      return;
    index++;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*20) + '%)');
    changeBullet(index);
  }

  function flipBackward() {
    if (index == 0)
      return;
    index--;
    $('#cards_wrapper').css('transform', 'translateX(-' + ((index)*20) + '%)');
    changeBullet(index);
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

  //click
  $("#cards").click(function() {
    if (index == 4) {
      player = new YT.Player('ytplayer', {
        height: $(window).innerHeight(),
        width: $(window).innerWidth(),
        videoId: 'jNGi9Z2L0cc',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // Redirect to next section when video ends
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          window.location.href = "http://www.google.com";
        }
      }
    }
  })
})
