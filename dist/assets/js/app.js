$(document).ready(function () {


    function burgerBtn() {
        let iconBtn = document.getElementById("menu-btn");
        iconBtn.classList.toggle("icon-Menu");
        iconBtn.classList.toggle("icon-X");
        let headerMenu = document.getElementById("headerMenu");
        headerMenu.classList.toggle("active");
    }
    document.getElementById("menu-btn").addEventListener("click", burgerBtn);

    $('.main_slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        adaptiveHeight: true,
    });
/*    let widthScreen = window.screen.width;
    let offerList = document.getElementById("offerList");
    if (widthScreen <= 576){
        offerList.classList.add("offer_slider");
    };*/

    $('.offer_slider').slick({
        slidesToShow: 6,
        arrows: false,
        dots: false,
        autoplay: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1188,
                settings: {
                    dots: true,
                    autoplay: true,
                    centerMode: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    dots: true,
                    slidesToShow: 1
                }
            },
        ]
    });
})