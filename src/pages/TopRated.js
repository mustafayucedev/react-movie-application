import Default from "layouts/Default"
import MoviesSection from "components/movies/MovieSection"
import MoviesCard from "components/movies/MoviesCard"

import { useMovie } from "context/movie"
import { httpService } from "utils/axios"

import { useEffect } from "react"

const TopRated = () => {
  
  const {topRated,setTopRated} = useMovie()

  useEffect(() => {
    httpService.get("/movie/top_rated")
    .then((res) => {
      setTopRated(res.data.results)
    })
    .catch((error) => {
        console.error(error)
    })
  },[])

  return (
    <>
      <Default>
        <MoviesSection title="Top 20 Movie List">
          {topRated &&
              topRated.map((item, index) => (
              <MoviesCard key={index} item={item} />
          ))}
          </MoviesSection>
      </Default>
    </>
  )
}

export default TopRated