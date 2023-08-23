import Carousel from "react-slick";
import { carouselMovies } from "utils/carousel"

const MoviesSectionCarousel = ( {title,children} ) => {
  
  return (
    <>
      <section className="xl:mb-20 mb-6">
      <div className='text-white lg:text-lg lg:text-md font-bold mb-5'> {title} </div>
        <Carousel {...carouselMovies}>
          {children}
        </Carousel>
      </section>
    </>
  );
};

export default MoviesSectionCarousel;
