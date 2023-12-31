import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    
    const [navbar,setNavbar] = useState([])
    const [popular,setPopular] = useState([])
    const [topRated,setTopRated] = useState([])
    const [upComing,setUpComing] = useState([])
    const [movie,setMovie] = useState([])
    const [movieCast,setMovieCast] = useState([])
    const [input,setInput] = useState("");
    const [search,setSearch] = useState("");
    const [hamburger,setHamburger] = useState(false)

    const values = {
        navbar,
        setNavbar,
        popular,
        setPopular,
        topRated,
        setTopRated,
        upComing,
        setUpComing,
        movie,
        setMovie,
        movieCast,
        setMovieCast,
        input,
        setInput,
        search,
        setSearch,
        hamburger,
        setHamburger
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export const useMovie = () => useContext(Context)
export default Provider