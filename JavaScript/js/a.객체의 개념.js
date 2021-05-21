// 프로퍼티(property)
    // 이름(name), 값(value) 로 구성.
        // 값으로 함수가 오면 메소드 (method)

    cat.name = "나비";
    cat.family = "코리안 숏 헤어";
    cat.age = 1;
    cat.weight = 300;

// 메소드 (method)
    // 값이 함수인 프로퍼티(property)

    cat.mew();
    cat.eat();
    cat.sleep();
    cat.play();

// 객체 (object)
    
    var cat = "나비"; // 일반적인 변수의 선언
    // 객체도 많은 값을 가지는 변수의 하나임.
    var kitty = {name : "나비", family: "코리안 숏 헤어", age: 1, weight: 300};
    cat     // 나비
    kitty.name      // 나비

// 객체의 프로퍼티 참조

    객체이름.프로퍼티이름
    or
    객체이름["프로퍼티이름"]
    
    // ex)
        var person = {
            name:"홍길동",      // 이름 속성을 정의함.
            birthday:"123123123",   // 생년월일 속성을 정의.
            pId :"345345345",       // 개인 id 속성을 정의
            fullId: function() {    // 계산을 위한 메소드.
                return this.birthday + this.pId;    // 생년월일과 개인id를 합쳐서 주민등록번호를 반환함.
            }
        };

        person.name     // 홍길동
        person["name"]  // 홍길동

// 객체의 메소드 참조
    
    객체이름.메소드이름() // ()를 붙이지 않으면, 메소드가 아닌 속성 그 자체를 참조하게 됨.
                        // 그러면, 해당 메소드의 정의 그 자체가 반환 됨.

    // ex)
        var person = {
            name:"홍길동",     
            birthday:"123123123",   
            pId :"345345345",      
            fullId: function() {   
                return this.birthday + this.pId;    
            }
        };

        person.fullId() // 123123123345345345 // fullID 메소드가 계산된 값.
        person.fullId;  // function() {return this.birthday + this.pId;} // 메소드가 아닌 속성으로서(정의) 그 자체가 가진 값. 
            // 따라서, 메소드에는 꼭!! ' ( ) ' 를 붙여줘야한다.

