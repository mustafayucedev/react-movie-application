import Carousel from "react-slick";
import { carouselMovies } from "utils/carousel"

import { useMovie } from "context/movie"
import { useEffect } from "react";
import { httpService } from "utils/axios";

const MoviesSection = () => {

    const { setPopular } = useMovie()

    useEffect(() => {
        httpService.get("/movie/popular")
        .then((res) => {
            setPopular(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })
    },[])

  return (
    <section className="xl:mb-40 lg:mb-20 md:mb-10">
    <Carousel {...carouselMovies}>
        
    </Carousel>
  </section>
  );
};

export default MoviesSection;
