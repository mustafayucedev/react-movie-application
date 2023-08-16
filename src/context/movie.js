import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    
    const [movies,setMovies] = useState("sadas")

    const values = {
        movies,
        setMovies
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export const useMovie = () => useContext(Context)
export default Provider