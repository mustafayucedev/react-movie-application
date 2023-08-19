import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    
    const [popular,setPopular] = useState([])
    const [topRated,setTopRated] = useState([])
    const [upComing,setUpComing] = useState([])

    const values = {
        popular,
        setPopular,
        topRated,
        setTopRated,
        upComing,
        setUpComing
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export const useMovie = () => useContext(Context)
export default Provider