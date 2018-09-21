
document.addEventListener('DOMContentLoaded', () => {

    console.log("Helloo!");



    /*function getPairs (arrays) {
        const result = [];
            for (let i=0; i<arrays.length; i++) {
               const first = arrays[i];
               if (arrays.indexOf(first, i+1) !== -1) {
                   result.push(true);
               } else {
                   result.push(false);
               }
            }
        return result;
    }
    const arr = [12, 12, 13, 15, 16, 20, "a", "b", "a"];
    console.log(arr);
    console.log(getPairs(arr));*/


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
    });

    //hamberger;
    $(document).ready(() => {
        $(".menu").hide();
        $(".hamburger").click(() => {
            $(".menu").slideToggle("slow", () => {
            });
        });
        $(".menu a li").click(() => {
            $(".menu").slideToggle("slow", () => {
            });
        })
    });
});
