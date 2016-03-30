var scenario = [
	{ id:'조장님', img: 'kakao_shik.png', type: 'RECEIVE', msg: '안녕하세요 지식정보조 여러분 오늘은 랩실에서 밤을 새려고 합니다! 발표가 망할 위기에 처해 있으니 모드들 일개미처럼 일하길 바래요^^', time: '오후 3:40' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '안녕하세요. 잠시 발표 관련 공지좀 하겠습니다' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '조장아' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '사람이 언제 죽는다고 생각하나?' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '심장이 총알에 뚫렸을 때?' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '아니!' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '불치의 병에 걸렸을 때?' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '맹독 버섯스프를 마셨을 때?' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '아니!' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '아니!!!' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '지식정보조... 발표를 준비할 때다.' },
	{ id:'교수님', img: 'kakao_teacher.png', type: 'RECEIVE', msg: '그래서 말인데 조장아<br><br>일단 지식정보의 정의부터 살펴보자. 지식정보산업이란 정보의 생산, 수집, 가공, 유통, 전달 따위의 정보에 관한 사항을 다루는 산업인데, 그 범위를 살펴보자면 e-learning, 포털, VR, 기타 데이터베이스 및 온라인정보 제공업 등을 포괄하는 산업분류로, 2011년을 기준으로 사업체 수는 9,507개이며 종사자 수는 6만 9,026명으로 나타난단다. 매출규모를 살펴보자면 1인당 평균매출액은 1억 3,100만 원이며 업체당 평균매출액은 9억 5,100만 원으로 나타나고 있어. 산업체 수는 큰 폭으로 증가하는 추세에 있으며 특히 스크린골프장 운영업 사업체 수가 70%가 넘는 큰 증가율을 보이고 있지. 지식정보가 핵노잼이라고 생각했겠지만 정말 생각보다 훨씬 핵노잼이라고! 이 정도면 지식정보산업에 대해 대충 감이 올 테니 내일 발표를 위해 홀가분하게 밤을 새면서 준비할 수 있겠지?' },
	{ id:null, img: null, type: 'QUIT', msg:'조장님이 나갔습니다<br><span class="underline">다시 초대하기</span>' },
	{ id:'팀원님', img: 'kakao_gave.png', type: 'RECEIVE', msg: '이제 누가 캐리해주냐' },
	{ type: 'SEND', msg: '이와 같이 모바일 메신저를 통해 즐거운 대화를 나눌 수 있다' },
	{ type: 'SEND', msg: '지배적인 소통양식이 웹에서 모바일로 전환되면서 나타난 가장 큰 변화는 인스턴트 메신저의 활성화에 있다.' },
	{ type: 'SEND', msg: '정보의 양이 많은지 적은지, 정보가 어떤 형태를 띄고 있는지에 상관없이 모바일 메신저를 활용하여 언제 어디서나 자유로운 소통이 가능해진 것이다.' },
	{ type: 'SEND', msg: '기존의 웹 메신저나 문자메시지가 각각 즉각성과 정보의 형태적 다양성 측면에서 지니던 문제점이 보다 진일보한 모바일 메신저가 등장하면서 해결된 것이다.' },
	{ type: 'SEND', msg: 'ps. 이 대화는 지식정보의 딱딱함에 분노한 능력자 조장이 수업을 드랍하려는 상황을 픽션으로 재구성한 것이니 오해하지 말 것.' },
	{ type: 'LAST', msg: '그렇다면 다음으로 넘어가볼까?' },

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
pushStartTimer = setTimeout("pushIn()", 6000); //일정 시간이 지나면 푸시UI를 작동시킬 타이머
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


