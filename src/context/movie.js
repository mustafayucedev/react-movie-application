import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    
    const [navbar,setNavbar] = useState([])
    const [popular,setPopular] = useState([])
    const [topRated,setTopRated] = useState([])
    const [upComing,setUpComing] = useState([])
    const [movie,setMovie] = useState([])
    const [movieCast,setMovieCast] = useState([])
    const [search,setSearch] = useState("");

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
        search,
        setSearch
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export const useMovie = () => useContext(Context)
export default Provider