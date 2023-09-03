import Default from "layouts/Default"

import MoviesSection from "components/movies/MovieSection"
import MoviesCard from "components/movies/MoviesCard"

import { useMovie } from "context/movie"

const Search = () => {

  const { search } = useMovie()

  return (
    <Default>
      {search 
      ? (
        <MoviesSection title="Search Movies..">
        {search.map((item, index) => (
            <MoviesCard key={index} item={item} />
        ))}
        </MoviesSection>
      )
      : 
      (
        <div className="text-white text-xl font-semibold my-40 text-center">Movie Not Found..</div>
      )
    } 

    </Default>
  )
}

export default Search