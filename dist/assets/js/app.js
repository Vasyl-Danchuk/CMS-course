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
})