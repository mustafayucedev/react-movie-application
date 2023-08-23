import MovieCast from "./MovieCast"

const MovieInfo = ( {movie} ) => {
  return (
    <section className='flex-1 text-white'>
        <div className="xl:text-3xl lg:text-2xl text-xl font-bold mb-5"> {movie.title} </div> 
        <div className="text-sm leading-6 mb-10"> {movie.overview} </div>
        <MovieCast />
    </section>
  )
}

export default MovieInfo