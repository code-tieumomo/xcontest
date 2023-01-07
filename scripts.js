AOS.init({
    duration: 700,
    offset: 50,
});

var myOffcanvas = document.querySelector(".offcanvas");
myOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
    document.querySelector(".menu-trigger").blur();
});

$(".activities").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
            },
        },
    ],
});
