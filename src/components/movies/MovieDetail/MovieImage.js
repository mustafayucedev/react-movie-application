
const API_IMG = "https://image.tmdb.org/t/p/w500/"
const NULL_IMG = "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

const MovieImage = ( {movie} ) => {
  return (
    <aside className='w-[500px]'>
        <img 
        className="rounded-md"
        src={movie.poster_path ? API_IMG + movie.poster_path : NULL_IMG} 
        alt={movie.title} />
    </aside>
  )
}

export default MovieImage