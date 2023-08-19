import Title from "components/title/Title"
import { useMovie } from "context/movie"

const MovieGenres = () => {

    const { movie } = useMovie()

  return (
    <>
        <Title>GENRES</Title>
        <ul>
            {/* {movie && 
                movie.map((item,index) => (
                    <li key={index}> {index} </li>
                ))
            } */}
        </ul>
    </>
  )
}

export default MovieGenres