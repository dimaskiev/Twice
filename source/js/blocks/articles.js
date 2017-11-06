/*************************/
/* articles.js              */
/*************************/
$('.slider-articles-list').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1, //,
    responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1,
            }
        }

    ]
});