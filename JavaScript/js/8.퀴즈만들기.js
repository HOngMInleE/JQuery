// 문제 / text
// 보기 / choice
// 정답이라는 값을 가지는 객체 / answer

// 객체의 초기화

    function Question(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer; 
    }

    var questions = [
        new Question('다음 중 Chet Baker의 노래가 아닌 것은?', ['Blue Room', 'I Fall In Love Too Easily', "You'll Miss Me When I'm Gone", 'Born To Be Blue'], "You'll Miss Me When I'm Gone")
    ];

    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;     // this 로 question라는 변수를 가져와 값을 받음. 
        this.questionIndex = 0;     // 문제를 (번호)순서대로 가져오는 역할, 
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
        
    }



