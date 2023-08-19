import { useEffect } from "react"
import { httpService } from "utils/axios"
import { useMovie } from "context/movie"
import { useParams } from "react-router-dom"

import MovieImage from "components/movies/MovieDetail/MovieImage"
import MovieInfo from "components/movies/MovieDetail/MovieInfo"

const MovieDetail = () => {

const { movie,setMovie , setMovieCast } = useMovie()

const { movieId } = useParams()

useEffect(() => {

    httpService.get(`/movie/${movieId}`)
    .then((res) => {
        console.log(res.data)
        setMovie(res.data)
    })
    .catch((error) => {
        console.error(error)
    })

    httpService.get(`/movie/${movieId}/credits`)
    .then((res) => {
        console.log(res.data.cast)
        setMovieCast(res.data.cast)
    })
    .catch((error) => {
        console.error(error)
    })

},[setMovie,movieId,setMovieCast])

  return (
    <>
        <div className='flex flex-wrap gap-10'>
            <MovieImage movie={movie} />
            <MovieInfo movie={movie} />
        </div>
    </>
  )
}

export default MovieDetail