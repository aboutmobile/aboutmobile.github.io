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
  $.ajax({
    url: 'http://52.79.125.192:3000/count'
  })
}, false);

// window.onload = function() {
//   var debug = /*true ||*/ false;
//   var h = document.querySelector('.heart-wrapper');

//   function toggleActivate() {
//     h.classList.toggle('active');
//   }

//   function toggleActivate2() {
//     h.classList.toggle("active2");
//   }

//   if (!debug) {
//     h.addEventListener('click', function(e) {
//       e.preventDefault();
//       if ($(".heart-wrapper").hasClass('active')) {
//         h.classList.remove("active");
//         h.offsetWidth = h.offsetWidth;
//         h.classList.add("active");
//       } else {
//         toggleActivate();
//       }
//     }, false);

//   } else {
//     var elts = Array.prototype.slice.call(h.querySelectorAll(':scope > *'), 0);
//     var activated = false;
//     var animating = false;
//     var count = 0;
//     var step = 1000;

//     function setAnim(state) {
//       elts.forEach(function(elt) {
//         elt.style.animationPlayState = state;
//       });
//     }

//     h.addEventListener('click', function() {
//       if (animating) return;
//       if (count > 27) {
//         h.classList.remove('active');
//         count = 0;
//         return;
//       }
//       if (!activated) h.classList.add('active') && (activated = true);

//       console.log('Step : ' + (++count));
//       animating = true;

//       setAnim('running');
//       setTimeout(function() {
//         setAnim('paused');
//         animating = false;
//       }, step);
//     }, false);

//     setAnim('paused');
//     elts.forEach(function(elt) {
//       elt.style.animationDuration = step / 1000 * 27 + 's';
//     });
//   }

// };
