
// 문제 객체
function Question(text, choice, answer) {
	this.text = text;
	this.choice = choice;
	this.answer = answer;
}

// 퀴즈 정보 객체		// 객체 초기화, questions 는 따로 설정. <문제데이터
function Quiz(questions) {
	this.score = 0;		// 점수
	this.questions = questions;		// 질문[]
	this.questionIndex = 0;		// 질문 순서
}

// 정답 확인 메소드
Quiz.prototype.correctAnswer = function (answer) {
	return answer == this.questions[this.questionIndex].answer;
}
// -----------------------------------------------------------------------------------
// 문제 데이터
var questions = [
	new Question('다음 중 최초의 상용 웹 브라우저는?', ['모자이크', '인터넷익스플로어', '구글 크롬', '넷스케이프 네비게이터'], '넷스케이프 네비게이터'),
	new Question('웹 문서에서 스타일을 작성하는 언어는?', ['HTML', 'jQuery', 'CSS', 'XML'], 'CSS'),
	new Question('명령어 기반의 인터페이스를 의미하는 용어는?', ['GUI', 'CLI', 'HUD', 'SI'], 'CLI'),
	new Question('CSS 속성 중 글자의 굵기를 변경하는 속성은?', ['font-size', 'font-style', 'font-weight', 'font-variant'], 'font-weight'),
];

// 퀴즈 객체 생성
var quiz = new Quiz(questions);

// -----------------------------------------------------------------------------------
// 문제 출력 함수
function update_quiz() {
	var question = document.getElementById("question");		// 함수 안에 정의된 변수는 다른 곳에서 쓰지 못한다.  (local, 지역의 개념)
	var idx = quiz.questionIndex + 1;						
	var choice = document.querySelectorAll('.btn');

	question.innerHTML = '문제' + idx + ") " + quiz.questions[quiz.questionIndex].text;		// 문제 출력 바꾸기

	for (i = 0; i < choice.length; i++) {
		choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];		// 선택 출력 바꾸기
	}

	progress();
}


// 문제 진행 정보 표시(현재 문제 번호/총 문항수)
function progress() {
	var progress = document.getElementById("progress");
	progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
}

update_quiz();

// -----------------------------------------------------------------------------------	
// 결과 표시
function result() {
	var quiz_div = document.getElementById('quiz');
	var per = parseInt((quiz.score * 100) / quiz.questions.length);

	var txt = '<h1>결과</h1>' + '<h2 id="score"> 당신의 점수: ' + quiz.score + '/' +
		quiz.questions.length + '<br><br>' + per + '점</h2>';

	quiz_div.innerHTML = txt;

	if (per >= 80) {
		txt += '<h2 style="color:green"> 훌륭합니다 </h2>';
		quiz_div.innerHTML = txt;
	} else if (80 > per && per >= 60) {		// && 써주지 않으면 실행이 안됨.
		txt += '<h2 style="color:red"> 무난한 점수네요 </h2>';
		quiz_div.innerHTML = txt;
	} else if (per < 60) {
		txt += '<h2 style="color:red"> 좀 더 분발하세요 </h2>';
		quiz_div.innerHTML = txt;
	}
}

// -----------------------------------------------------------------------------------
var btn = document.querySelectorAll('.btn');	// .btn 객체

// 입력 및 정답 확인 함수
function checkAnswer(i) {
	btn[i].addEventListener('click', function () {
		var answer = btn[i].innerText;

		if (quiz.correctAnswer(answer)) {
			alert("정답입니다.");
			quiz.score++;		// 정답 개수 + 1
		} else {
			alert("틀렸습니다!")
		}

		if (quiz.questionIndex + 1 < quiz.questions.length) {		// 문제 번호 + 1 < 문제 숫자(개수) , 문제++; / true :  문제 출력	// Index = 0 이라서 + 1 해야함.
			quiz.questionIndex++;
			update_quiz();
		} else {													// 문제 번호 + 1 < 문제 숫자(갯수) / flase : 결과 출력
			result();
		}
	});
}
// 4개의 버튼 이벤트리스너 지정
for (var i = 0; i < btn.length; i++) {
	checkAnswer(i);
}

update_quiz();
