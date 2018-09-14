
document.addEventListener('DOMContentLoaded', () => {

    console.log("Helloo!");

    //swajper
    $(document).ready(() => {
        const swipers = $(".swiper-container");

        const mySwiper = new Swiper(swipers[0], {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            flipEffect: {
                rotate: 30,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        });
        const swiper2 = new Swiper(swipers[1], {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            loop: true,

        });
    });

    //hamberger;
    $(document).ready(() => {
        $(".menu").hide();
        $(".hamburger").click(() => {
            $(".menu").slideToggle("slow", () => {
            });
        });
        $("a li").click(() => {
            $(".menu").slideToggle("slow", () => {
            });
        })
    });
});
