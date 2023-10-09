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

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

const mapboxAccessToken = 'pk.eyJ1IjoiYm9rbHVrMCIsImEiOiJjbG5qNzVsbWQxZzR0Mm1ydXI4ZHJjNmNwIn0.r4YSZ7SXebxgAtcp4WO1ug';

const map = L.map('map').setView([43.8521356, 25.9707683], 15);
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

function addWaypoint(lat, lon) {
    L.marker([lat, lon]).addTo(map);
}

const extractCoordinates = (url) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);
    if (match && match.length === 3) {  
        return { lat: parseFloat(match[1]), lon: parseFloat(match[2]) };
    }
    return null;
};

const googleMapsUrl1 = "https://www.google.com/maps/@43.8535924,25.9577132,3a,15y,351.68h,91.37t/data=!3m6!1e1!3m4!1sK8ZVRCLs1bgmllaJlN97Mw!2e0!7i16384!8i8192?entry=ttu";
const googleMapsUrl2 = "https://www.google.com/maps/place/LoSt+Computers/@43.8498253,25.9906319,19.25z/data=!4m6!3m5!1s0x40ae6754d1e61c95:0x32e0c2afdc9db1ee!8m2!3d43.8500544!4d25.99031!16s%2Fg%2F1thx72zm?entry=ttu";
const googleMapsUrl3 = "https://www.google.com/maps/place/Dartek+OOD/@43.8500241,25.9549023,15.42z/data=!4m10!1m2!2m1!1z0LrQvtC80L_RjtGC0YrRgNC10L0g0YHQtdGA0LLQuNC3INGA0YPRgdC1!3m6!1s0x40ae60cfc5a2163f:0x1dea315cff6c3d3a!8m2!3d43.8500241!4d25.9549023!15sCirQutC-0LzQv9GO0YLRitGA0LXQvSDRgdC10YDQstC40Lcg0YDRg9GB0LVaLCIq0LrQvtC80L_RjtGC0YrRgNC10L0g0YHQtdGA0LLQuNC3INGA0YPRgdC1kgEOY29tcHV0ZXJfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlhhV0ZJWm1wUlJSQULgAQA!16s%2Fg%2F1tfjp61k?entry=ttu";

const waypoint1 = extractCoordinates(googleMapsUrl1);
const waypoint2 = extractCoordinates(googleMapsUrl2);
const waypoint3 = extractCoordinates(googleMapsUrl3);
if (waypoint1 && waypoint2 && waypoint3) {
    addWaypoint(waypoint1.lat, waypoint1.lon);
    addWaypoint(waypoint2.lat, waypoint2.lon);
    addWaypoint(waypoint3.lat, waypoint3.lon);
} else {
    alert('Failed to extract coordinates from Google Maps URLs.');
}