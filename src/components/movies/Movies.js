import { useEffect } from "react";
import { useMovie } from "context/movie";
import { httpService } from "utils/axios";

import MoviesSection from "./MoviesSection";
import MoviesCard from "./MoviesCard";

const Movies = () => {

    const { popular,setPopular, topRated,setTopRated, upComing,setUpComing } = useMovie()

    useEffect(() => {

        httpService.get("/movie/popular")
        .then((res) => {
            setPopular(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })

        httpService.get("/movie/top_rated")
        .then((res) => {
            setTopRated(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })

        httpService.get("/movie/upcoming")
        .then((res) => {
            setUpComing(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })
        
    },[setPopular,setTopRated,setUpComing])

  return (
    <>
        <MoviesSection title="Popular Movies">
        {popular &&
            popular.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>

        <MoviesSection title="Top 20 List">
        {topRated &&
            topRated.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>

        <MoviesSection title="Up Coming..">
        {upComing &&
            upComing.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>
    </>
  );
};

export default Movies;