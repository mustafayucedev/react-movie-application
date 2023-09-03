import { CiSearch } from "react-icons/ci";
import { useMovie } from "context/movie";
import { useNavigate } from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showErrorMessage } from "utils/toastify";

import { httpService } from "utils/axios";


const Search = () => {

  const { input, setInput, setSearch } = useMovie()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault()
    setInput(e.target.title)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if(input.trim() === "") {
      showErrorMessage("Lütfen İlgili Alanları Doldurun !")
      return false
    }
    searchRequest()
    navigate("/search")
   }

   const searchRequest = () => {
    httpService.get(`/search/movie?query=${input}`)
    .then((res) => {
        setSearch(res.data.results)
    })
    .catch((error) => {
        console.error(error)
    })
   }

  return (
    <>
      <section className="md:px-5 xl:mb-40 mb-10">
        <form className="relative xl:w-[600px] md:w-full mx-auto" action="/search">
          <input type="text" placeholder="Search Movie.." value={input} onChange={handleChange} className="bg-white w-full py-4 px-3 pr-16 text-sm rounded-sm" />
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
              <button className="text-white text-sm" title="oppenheimer" onClick={handleClick}>#oppenheimer</button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
};

export default Search;
