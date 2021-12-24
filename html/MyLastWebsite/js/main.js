var string = "Мы создаем легкие решения для сложных задач и проблем";
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("full__title").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 70);
}
frameLooper();


const btn = document.querySelector('#topBtn')
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    });
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    })
});


const header = document.querySelector('#header')
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    });
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    })

});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const bd = document.querySelector('body')

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
            bd.style.overflow = 'hidden'
        } else {
            $('body').css('overlow', 'visible');
            bd.style.overflow = 'scroll'
        }
    }
}

burgerMenu('.burger-menu');

// For Live Projects
window.addEventListener('load',function(){
    setTimeout(() => {
        document.querySelector('body').classList.add("loaded")
    }, 700);
});


AOS.init();