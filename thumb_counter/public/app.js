var socket = io();

socket.on('count', function(totalLike) {
  $('#count').text(totalLike);
});

socket.on('counters', function(obj) {
  $("#count").html(JSON.stringify(obj, null, 2).replace(/\n/g, "<br>"))
  updateData(obj)
})

$('#reset').click(function() {
  socket.emit('reset');
  return false;
})

var data = {
  labels_json: ["chat", "insta", "insta2", "news1" ,"news2"],
  labels: ["소통의 미학", "나에 대하여", "해쉬태그", "가볍지만", "결코 앝지 않은"],
  datasets: [
    {
        label: "My First dataset",
        fillColor: "rgba(46,61,81,0.5)",
        strokeColor: "rgba(46,61,81,0)",
        highlightFill: "rgba(46,61,81,0.9)",
        highlightStroke: "rgba(46,61,81,0)",
        data: [0, 0, 0, 0, 0]
    }
  ]
}
var ctx = $("#myChart").get(0).getContext("2d");
var myBarChart = new Chart(ctx).Bar(data);

function updateData(obj) {
  for (var key in obj) {
    var keyIndex = data.labels_json.indexOf(key);
    if (keyIndex != -1)
      console.log(obj);
      myBarChart.datasets[0].bars[keyIndex].value = obj[key];
  }
  myBarChart.update();
}

// var dd = {
//   "insta": 30,
//   "chat": 7,
//   "news1": 1,
//   "news2": 1,
//   "insta2": 1
// }

// updateData(dd);
