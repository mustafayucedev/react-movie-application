import Default from "layouts/Default"
import Search from "components/search/Search"
import Title from "components/title/Title"
import Movie from "components/movies/Movies"

const Home = () => {
  return (
    <Default>
      <Search />
      <Title>Gündemdekiler</Title>
      <Movie />
    </Default>
  )
}

export default Home