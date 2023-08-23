import Default from "layouts/Default"
import MoviesSection from "components/movies/MovieSection"
import MoviesCard from "components/movies/MoviesCard"

import { useMovie } from "context/movie"
import { httpService } from "utils/axios"

import { useEffect } from "react"

const UpComing = () => {
  
  const {upComing,setUpComing} = useMovie()

  useEffect(() => {
    httpService.get("/movie/upcoming")
    .then((res) => {
      setUpComing(res.data.results)
    })
    .catch((error) => {
        console.error(error)
    })
  },[])

  return (
    <>
      <Default>
        <MoviesSection title="Up Coming...">
          {upComing &&
              upComing.map((item, index) => (
              <MoviesCard key={index} item={item} />
          ))}
          </MoviesSection>
      </Default>
    </>
  )
}

export default UpComing