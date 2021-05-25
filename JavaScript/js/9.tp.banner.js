var banner = document.getElementById('banner');
var img = document.getElementsByTagName('img');
var toggle = document.getElementById('toggle');
var sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
console.log(banner_height);

var cast = [];

function set_balloon(num) {

    var x = Math.floor(Math.random() * (500 - 10) + 10),
        y = Math.floor(Math.random() * (400 - 120) + 120),
        size = Math.floor(Math.random() * (200 - 100) + 100),
        angle = Math.floor(Math.random() * (360 - 0) + 0),
        speed = Math.random() * (2 - 0) + 0;

    cast[num] = {
        x: x,
        y: -y,
        size: size,
        angle: angle,
        speed: speed
    }
}

function ball_init() {
    for (i = 0; i < img.length; i++) {
        set_balloon(i);
        img[i].style.left = '-9999px';
        img[i].style.top = '-9999px';
    }
}

function animate_balloon() {
    for (i = 0; i < img.length; i++) {
        img[i].style.left = cast[i].x + 'px';
        img[i].style.top = cast[i].y + 'px';
        img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)'

        if (cast[i].y < parseInt(banner_height)) {
            cast[i].y += 1 + cast[i].speed;
            cast[i].angle += cast[i].speed;
        } else {
            set_balloon(i);
        }

    }
}

function bgm_init() {
    var bgm = new Audio();
    bgm.src = 'images/bgm.mp3';
    bgm.loop = true;

    document.body.appendChild(bgm);
}


ball_init();
setInterval(function () {
    animate_balloon();
}, 1000 / 30);
bgm_init();

sound_btn.onclick = function (event) {
    var attr = sound_btn.getAttribute('class');
    var bgm = document.getElementsByTagName('audio');
    if (attr == 'active') {
        sound_btn.removeAttribute('class');
        sound_btn.setAttribute('src', 'images/sound_off.png')
        bgm[0].pause();
    } else {
        sound_btn.setAttribute('class', 'active');
        sound_btn.setAttribute('src', 'images/sound_on.png')
        bgm[0].play();
    }
    event.stopPropagation();
}

toggle.onclick = function () {
    var attr = banner.getAttribute('class');
    if (attr == "active") {
        banner.removeAttribute('class');
        toggle.innerHTML = '배너열기';
        return false;
    } else {
        banner.setAttribute('class', 'active')
        toggle.innerHTML = "배너닫기"
        return false;
    }
}

banner.onclick = function () {
    window.open("http://www.daum.net", "");
}