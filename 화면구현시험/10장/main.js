// 필요한 요소들을 객체화.

var banner = document.getElementById('banner');
var img = document.getElementsByTagName('img'); // img 에 id, class 속성이 없어서 TagName 메소드로 가져옴.
var toggle = document.getElementById('toggle'); // Elements 's'가 붙으면 배열형태로 가져와짐.
var sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
console.log(banner_height); // 190px 나옴   //banner.active 의 height값.

// 각자 다른 값으로 떨어지는 풍선

var cast = [];

function set_balloon(num) { // num(매개변수) = 풍선 10개에 대한 정보를 이 번호로 구분할것이다.

    var x = Math.floor(Math.random() * (500 - 10) + 10),
        y = Math.floor(Math.random() * (400 - 120) + 120),
        size = Math.floor(Math.random() * (200 - 100) + 100),
        angle = Math.floor(Math.random() * (360 - 0) + 0),
        speed = Math.random() * (2 - 0) + 0;

    cast[num] = {   // 객체 형식. / 변수 여러개를 묶어서 처리할 수 있는 형식.
        y:-y            // 10개 모두 값이 고정, 다 다르게 하기 위해 예측불가능한 '난수'를 사용.
        x:x,           // 만드는 방법 : 함수생성, 괄호로 만드는 방식, 
        size:size,        // 난수가 (x,y)값이 넓이에 벗어나지 않게 설정해야함.
        angle:angle,
        speed:speed    
    } 

}