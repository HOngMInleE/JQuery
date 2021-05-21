// 변수 선언

    // s 가 붙어있는 것들 = 배열구조의 형태, 인덱스번호로 접근.
        // 인덱스 번호로 접근할 때 인덱스 번호를 반드시 작성해야함. ( 지정해줘야 해서 인듯)
        
    var inp = document.forms["cal"];    // [0]과 같음
    var input = document.getElementsByTagName("input");
    var cls_btn = document.getElementsByClassName('cls_btn')[0];    
    var result_btn = document.getElementsByClassName('result_btn')[0];

    // 계산기 초기화 (clear) 
        // 기능 / 함수로 표현(method)

    function clr() {        
        inp['result'].value = 0;
    }
        
    // 계산기 입력 처리 

    function calc(value) {       
        if(inp['result'].value == 0 || inp['result'].value == "입력오류") {
            inp['result'].value = '';
        }

        inp['result'].value += value;
    }

    // 계산 결과 처리
        // =, 결과 기능을 위해 만든 함수
    function my_result() {
        var result = document.forms['cal']['result'];
        var cal = eval(result.value);
        inp['result'].value = cal;
    }

// 이벤트 

    for(i= 0; i < input.length; i++) {
        if(input[i].value != '=' || input[i].value != 'clear') {
            input[i].onclick = function() {
                calc(this.value);
            }
        }
    }

    cls_btn.onclick = function() {
        clr();
    }

    result_btn.onclick = function() {
        try {           // 예외처리 (오류)
            my_result();        
        } catch (err) {
            var result = inp['result'];
            result.value = "입력오류";
        }
        
    }