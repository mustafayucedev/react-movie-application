import Default from "layouts/Default"
import Search from "components/search/Search"
import Movie from "components/movies/Movies"

const Home = () => {
  return (
    <Default>
      <Search />
      <Movie />
    </Default>
  )
}

export default Home