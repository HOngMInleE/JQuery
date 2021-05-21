// DOM 요소 (Document Object Model)

    // DOM 요소의 선택

        // HTML 요소를 다루기 위해서 특정 HTML 요소를 선택하는 방법

            // 1. HTML 태그 이름(tag name)을 이용한 선택    // Tag Name 선택
            // 2. 아이디(id)를 이용한 선택                  // id 선택
            // 3. 클래스(class)를 이용한 선택               // class 선택
            // 4. name 속성(attribute)을 이용한 선택        // 속성(attribute) 선택
            // 5. CSS 선택자(selector)를 이용한 선택        // CSS 선택자 선택
            // 6. HTML 객체 집합(object collection)을 이용한 선택   
        
        // 1. HTML tag name 선택
            // getElementsByTagName() 메소드 이용
            
        // ex)
            
            var selecteditem = document.getElementsByTagName("li"); // 모든 <li> 요소를 선택함.
            for (var i = 0; i < selecteditem.length; i++) {
                selecteditem.item(i).style.color = "red";       // 선택된 모든 요소의 텍스트 색상을 변경함.
            }
        







// HTML DOM 요소를 이용한 innerHTML 프로퍼티 이용방법
    
    // 1. document.getElementById() 나 document.getElementsByTagName() 등의 메소드를 사용하여 HTML 요소를 선택.

    // 2. innerHTML 프로퍼티 이용, 선택된 HTML 요소의 내용(content) 나 속성(attribute)값 등을 손쉽게 변경가능.

    // ex) 

        var str = document.getElementById("text");  

            // 변수지정. 메소드통해 { Id 값이 "text"인 HTML요소 선택. }     / { } = ' getElementById ' 메소드의 역할

        str.innerHTML = "이 문장으로 바뀌었습니다!";  

            // str. (str객체에) innerHTML이란 프로퍼티 이용 -> 해당("text")의 내용을 변경함.

//