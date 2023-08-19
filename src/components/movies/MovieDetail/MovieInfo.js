import MovieCast from "./MovieCast"
import MovieGenres from "./MovieGenres"

const MovieInfo = ( {movie} ) => {
  return (
    <section className='flex-1 text-white'>
        <div className="text-3xl font-bold mb-5"> {movie.title} </div> 
        <div className="text-sm leading-6 mb-10"> {movie.overview} </div>
        <MovieCast />
        <MovieGenres />
    </section>
  )
}

export default MovieInfo