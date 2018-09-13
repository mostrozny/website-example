document.addEventListener('DOMContentLoaded', () => {
    console.log("Helloo!");

    //swajper
    $(document).ready(() => {
        const mySwiper = new Swiper('.swiper-container', {
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
        });
    });

    //hamberger;
    $( document ).ready(() => {
        $( ".menu" ).hide();
        $( ".hamburger" ).click(() => {
            $( ".menu" ).slideToggle( "slow", () => {
            });
        });
    });
});
