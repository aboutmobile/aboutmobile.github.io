var scenario = [
	{ id:'조장님', img: 'kakao_shik.png', type: 'RECEIVE', msg: '안녕하세요, 오늘은 랩실에서 밤을 새려고 합니다! 발표가 망할 위기에 처해 있으니 모드들 일개미처럼 일하길 바래요^^', time: '오후 3:40' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '안녕하세요. 발표와 관련해서 공지좀 하겠습니다' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '한글깨기테스트한글깨기 테스트 한글 깨기 테스트 한글깨기 테스트한글 깨기 테스트 한글 깨기 테스트 한글 깨기 테스트 한글 깨기 테스트 한글 깨기 테스트 한글 깨기 테스트한글 깨기테스트 한글 깨기 테스트 ' },
	{ id:null, img: null, type: 'QUIT', msg:'조장님이 나갔습니다<br><span class="underline">다시 초대하기</span>' },
	{ id:'팀원님', img: 'kakao_gave.png', type: 'RECEIVE', msg: '이제 누가 캐리해주냐' },
	{ type: 'SEND', msg: '이와 같이 모바일 메신저를 통해 즐거운 대화를 나눌 수 있다' },
	{ type: 'SEND', msg: '이제 누가 캐리해주냐' },
	{ type: 'SEND', msg: '이제 누가 캐리해주냐' },
	{ type: 'SEND', msg: '이제 누가 캐리해주냐' },
	{ type: 'SEND', msg: '이제 누가 캐리해주냐' },
	{ type: 'LAST', msg: '다음으로 넘어가볼까?' },

]

function toDOM(diction) {
	var dom = $('<div class="row">');
	if (diction.type == 'RECEIVE') {
		dom.append($('<div class="profile-left">' + '<img class="kakao-profile-left" src="' + diction.img + '"/>' + '</div>'))
		dom.append($('<div class="message-left">' + '<div class="kakao-id-left">' + diction.id + '</div>' + '<div class="bubble-left">' + diction.msg + '</div>' + '</div>'))				
	}
	else if (diction.type == 'SEND') {
		dom.append($('<div class="message-right">' + '<div class="bubble-right">' + diction.msg + '</div>' + '</div>'))				
	}
	else if (diction.type == 'QUIT') {
		dom.append($('<div class="quit-bubble">' + diction.msg + '</div>'))
	}
	else if (diction.type == 'LAST') {
		dom.append($('<div class="message-right">' + '<div class="bubble-right">' + '<a href="http://aboutmobile.github.io/insta/insta.html">' + diction.msg + '</a>' + '</div>' + '</div>'))				
	}
	return dom;
}

var idx = 0;
var messageHeight = $('.messages').height();

$('#send').click(function() {
	if (idx >= scenario.length)
		return;
	$('.messages').append(toDOM(scenario[idx++]));
	var newHeight = $('.messages').height();
	console.log(newHeight + ' ' + messageHeight)
	$('.messages-wrapper').animate({
		scrollTop:  newHeight - messageHeight
	}, 500);
})

//푸시UI
var pushStartTimer, pushEndTimer;
pushStartTimer = setTimeout("pushIn()", 5000); //일정 시간이 지나면 푸시UI를 작동시킬 타이머
// pushEndTimer = setTimeout("pushOut()", 13000);

$('.push-box').click(pushOut);

function pushIn() { //푸시UI를 가지고 오는 메소드
	$('.push-box').addClass('in');
}

function pushOut() { //푸시UI를 버리는 메소드
	$('.push-box').removeClass('in');
	$('.push-box').addClass('out');
	$('.subBox').addClass('active')
	$('.bottom').addClass('absolute')
}


