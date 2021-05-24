
// 문제 객체
function Question(text, choice, answer) {
	this.text = text;
	this.choice = choice;
	this.answer = answer;
}

// 퀴즈 정보 객체
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

// 정답 확인 메소드
Quiz.prototype.correctAnswer = function (answer) {
	return answer == this.questions[this.questionIndex].answer;
}
// -----------------------------------------------------------------------------------
// 문제 데이터
var questions = [
	new Question('f', ['a', 'b', 'c', 'd'], 'e'),
	new Question('a1', ['a', 'b', 'c', 'd'], 'a3'),
	new Question('a1', ['a', 'b', 'c', 'd'], 'a3'),
	new Question('a1', ['a', 'b', 'c', 'd'], 'a3'),
];

// 퀴즈 객체 생성
var quiz = new Quiz(questions);

// -----------------------------------------------------------------------------------
// 문제 출력 함수
function update_quiz() {
	var question = document.getElementById("question");
	var idx = quiz.questionIndex + 1;
	var choice = document.querySelectorAll('.btn');

	question.innerHTML = '문제' + idx + ") " + quiz.questions[0].text;

	for (i = 0; i < 4; i++) {
		choice[i].innerHTML = quiz.questions[0].choice[i];
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
		txt += '<h2 style="color:red"> 훌륭합니다 </h2>';
		quiz_div.innerHTML = txt;
	} else if (80 > per >= 60) {
		txt += '<h2 style="color:blue"> 무난한 점수네요 </h2>';
		quiz_div.innerHTML = txt;
	} else (60 > per >= 0); {
		txt += '<h2 style="color:green"> 좀 더 분발하세요 </h2>';
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
			quiz.score++;
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
