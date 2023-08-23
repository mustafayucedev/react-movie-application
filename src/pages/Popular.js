import Default from "layouts/Default"
import MoviesSection from "components/movies/MovieSection"
import MoviesCard from "components/movies/MoviesCard"

import { useMovie } from "context/movie"
import { httpService } from "utils/axios"

import { useEffect } from "react"

const Popular = () => {
  
  const {popular,setPopular} = useMovie()

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
    <>
      <Default>
        <MoviesSection title="Popular Movies">
          {popular &&
              popular.map((item, index) => (
              <MoviesCard key={index} item={item} />
          ))}
          </MoviesSection>
      </Default>
    </>
  )
}

export default Popular