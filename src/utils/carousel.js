export const carouselMovies = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nav: false
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nav: false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nav: false
        }
      }
    ]
  };