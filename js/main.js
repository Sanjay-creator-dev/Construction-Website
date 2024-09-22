$(document).ready(function () {
    // Hero Slider
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            },
        }
    })
    // OUR DIVERSIFIED TALENTS SLIDER
    $('#talent-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        margin: 34,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1140: {
                items: 3,
                center: true,
            }
        }
    })


    // Testimonial
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 800,
    })
});


// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increament = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increament;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 26, 3000);
    counter("count2", 0, 1000, 3000);
    counter("count3", 0, 100, 3000);
    counter("count4", 0, 30, 3000);
})

