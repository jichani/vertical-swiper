var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 2000,
    },
    controller: {
        inverse: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
