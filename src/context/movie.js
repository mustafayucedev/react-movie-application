import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    
    const [popular,setPopular] = useState([])

    const values = {
        popular,
        setPopular
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export const useMovie = () => useContext(Context)
export default Provider