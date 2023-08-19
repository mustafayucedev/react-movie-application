import Carousel from "react-slick";
import { carouselMovies } from "utils/carousel"

const MoviesSection = ( {title,children} ) => {
  
  return (
    <>
      <section className="xl:mb-20 mb-6">
      <div className='text-white text-lg font-bold mb-5'> {title} </div>
        <Carousel {...carouselMovies}>
          {children}
        </Carousel>
      </section>
    </>
  );
};

export default MoviesSection;
