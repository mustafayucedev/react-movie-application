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
            console.log(res.data.results)
            setPopular(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })

        httpService.get("/movie/top_rated")
        .then((res) => {
            console.log(res.data.results)
            setTopRated(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })

        httpService.get("/movie/upcoming")
        .then((res) => {
            console.log(res.data.results)
            setUpComing(res.data.results)
        })
        .catch((error) => {
            console.error(error)
        })
        
    },[setPopular,setTopRated,setUpComing])

  return (
    <>
        <MoviesSection title="Popüler Film & Diziler">
        {popular &&
            popular.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>

        <MoviesSection title="Türkiye'de Bugün Top 20 Film Listesi">
        {topRated &&
            topRated.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>

        <MoviesSection title="Çok Yakında..">
        {upComing &&
            upComing.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>
    </>
  );
};

export default Movies;