const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate-42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-43")
    document.body.classList.toggle("overflow-hidden")
}


$(document).ready(function () {
    $('.my-file').slick({
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        dots:false,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            
         

        ]

    });
});

