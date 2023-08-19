import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <section className="md:px-5 xl:mb-40 mb-10">
        <form className="relative xl:w-[600px] md:w-full mx-auto">
          <input type="text" placeholder="Search Movie.." className="bg-white w-full py-4 px-3 pr-16 text-sm rounded-sm" />
          <button type="submit" title="Search Movie" className="absolute top-1/2 right-3 -translate-y-1/2 -mt-5">
            <CiSearch size={32}/>
          </button>
          <ul className="flex items-center justify-center flex-wrap gap-6 mt-5">
            <li>
              <button className="text-white text-sm" title="joker">#joker</button>
            </li>
            <li>
              <button className="text-white text-sm" title="breaking bad">#breaking bad</button>
            </li>
            <li>
              <button className="text-white text-sm" title="spider man">#spider man</button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
};

export default Search;
