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

    function Quiz()