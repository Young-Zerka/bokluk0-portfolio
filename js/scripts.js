$(function () {
    feather.replace();
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);
        event.preventDefault();
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    $('.show-video').click(function () {
        $('.video-wrapper').addClass('show');
    });

    $('.video-close').click(function () {
        $('.video-wrapper').removeClass('show');
    });

    $('.slick-users').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });

    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});

const textElement = document.getElementById('typer');
const textsToType = [
    "Web Designer",
    "Back-end Developer",
    "Software Engineer",
    "3D Artist"
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (textIndex < textsToType.length) {
        if (charIndex < textsToType[textIndex].length) {
            textElement.textContent += textsToType[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1000);
        }
    }
}

function eraseText() {
    if (charIndex >= 0) {
        textElement.textContent = textsToType[textIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex++;
        if (textIndex >= textsToType.length) {
            textIndex = 0;
        }
        setTimeout(typeText, 1000);
    }
}

typeText();

const el = document.querySelector("#module");

function cookies(functions) {
    const container = document.querySelector('.cookies-container');
    const save = document.querySelector('.cookies-save');
    if (!container || !save) return null;

    const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
    if (localPref) activateFunctions(localPref);

    function getFormPref() {
        return [...document.querySelectorAll('[data-function]')]
            .filter((el) => el.checked)
            .map((el) => el.getAttribute('data-function'));
    }

    function activateFunctions(pref) {
        pref.forEach((f) => functions[f]());
        container.style.display = 'none';
        window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
    }

    function handleSave() {
        const pref = getFormPref();
        activateFunctions(pref);
    }

    save.addEventListener('click', handleSave);
}

function marketing() {
    console.log('Função de marketing');
}

function analytics() {
    console.log('Função de analytics');
}

cookies({
    marketing,
    analytics,
});