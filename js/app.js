
document.addEventListener('DOMContentLoaded', () => {

    console.log("Helloo!");

    //swajper
    $(document).ready(() => {
        const mySwiper = new Swiper('.swiper-container', {
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
