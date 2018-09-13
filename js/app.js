document.addEventListener('DOMContentLoaded', () => {
    console.log("Helloo!");

    $(document).ready(function () {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 5000,
            },
            flipEffect: {
                rotate: 30,
                slideShadows: false,
            },
        })
    });
});
