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
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

AOS.init()

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

window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelector('body').classList.add("loaded")
    }, 1000);
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});





(function ($) {
    "use strict";

    //Page cursors

    document.querySelector("body").addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    let t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
})(jQuery);