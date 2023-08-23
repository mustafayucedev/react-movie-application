import { CiSearch } from "react-icons/ci";
import { useMovie } from "context/movie";
import { useNavigate } from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showErrorMessage } from "utils/toastify";

const Search = () => {

  const { search, setSearch } = useMovie()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault()
    setSearch(e.target.title)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if(search === "") {
      showErrorMessage("Lütfen İlgili Alanları Doldurun !")
    }
    else {
      navigate("/search")
    }
  }

  return (
    <>
      <section className="md:px-5 xl:mb-40 mb-10">
        <form className="relative xl:w-[600px] md:w-full mx-auto" action="/search">
          <input type="text" placeholder="Search Movie.." value={search} onChange={handleChange} className="bg-white w-full py-4 px-3 pr-16 text-sm rounded-sm" />
          <button type="submit" title="Search Movie" className="absolute top-1/2 right-3 -translate-y-1/2 -mt-5" onClick={handleSearch}>
            <CiSearch size={32}/>
          </button>
          <ToastContainer />
          <ul className="flex items-center justify-center flex-wrap lg:gap-6 gap-4 mt-5">
            <li>
              <button className="text-white text-sm" title="joker" onClick={handleClick}>#joker</button>
            </li>
            <li>
              <button className="text-white text-sm" title="breaking bad" onClick={handleClick}>#breaking bad</button>
            </li>
            <li>
              <button className="text-white text-sm" title="spider man" onClick={handleClick}>#spider man</button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
};

export default Search;
