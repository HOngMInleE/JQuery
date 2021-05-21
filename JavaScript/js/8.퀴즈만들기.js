// 문제 / text
// 보기 / choice
// 정답이라는 값을 가지는 객체 / answer

// 객체의 초기화

    function Question(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer = answer; 
    }

    var questions = [
        new Question('다음 중 Chet Baker의 노래가 아닌 것은?', ['Blue Room', 'I Fall In Love Too Easily', "You'll Miss Me When I'm Gone", 'Born To Be Blue'], "You'll Miss Me When I'm Gone")
    ];

    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;     // this 로 question라는 변수를 가져와 값을 받음. 
        this.questionIndex = 0;     // 문제를 (번호)순서대로 가져오는 역할, 
    }

    Quiz.prototype.correctAnswer = function(answer) {
        return answer == this.questions[this.questionIndex].answer;
    }

    var quiz = new Quiz(questions);

    function update_quiz() {
        var question = document.getElementById("question");
        var idx = quiz.questionIndex + 1;       // 시작이 0부터라 1을 더해줌.
        var choice = document.querySelectorAll('.btn');     
    
    // 질문 생성 
        question.innerHTML = '문제'+ idx + ") " + quiz.questions[0].text;    // question[0]은 문제를 의미(첫번쨰문제).text

    // 문제 생성
        for(i = 0; i < 4; i++) {
            choice[i].innerHTML = quiz.questions[0].choice[i];
        }

        progress();
    }

    function progress() {
        var progress = document.getElementById("progress");
        progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
    }

    update_quiz();

    var btn = document.querySelectorAll('.btn');

    function checkAnswer(i) {
        btn[i].addEventListener('click',function() {
            var answer = btn[i].innerText;
            if(quiz.correctAnswer(answer)) {
                alert("정답입니다.");
                quiz.score++;
            } else {
                alert("땡! 틀렸습니다.")
            }

            result();
        });
    }

    for(i =0; i < 4; i++) {
        checkAnswer(i);
    }

    // 결과 화면

    function result() {
        var quiz_div = document.getElementById('quiz');
        var per = parseInt((quiz.score*100) / quiz.questions.length);

        var txt = '<h1>결과</h1>' + '<h2 id="score"> 당신의 점수: ' + quiz.score + '/' +
            quiz.questions.length + '<br><br>' + per + '점</h2>';

        quiz_div.innerHTML = txt;

        if(per >= 80) {
            txt += '<h2 style="color:red"> 훌륭합니다 </h2>';
            quiz_div.innerHTML = txt;
        } else if (80 > per >= 60) {
            txt += '<h2 style="color:blue"> 좀 치시네요! </h2>';
            quiz_div.innerHTML = txt;
        } else if (60 > per >= 40) {
            txt += '<h2 style="color:green"> 다음 기회에.. </h2>';
            quiz_div.innerHTML = txt;
        } else if (40 > per >= 0) {
            txt += '<h2 style="color:red"> 분발하세요! </h2>';
            quiz_div.innerHTML = txt;
        } 
    }

