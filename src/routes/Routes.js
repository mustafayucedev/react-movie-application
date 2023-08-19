import { useRoutes } from "react-router-dom"

import Home from "pages/Home"
import Movie from "pages/Movie"
import About from "pages/About"
import Error from "pages/Error"

const Routes = () => {
    const routesData = useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/movie",
            element: <Movie />,
            children: [
                {
                    path: ":movieId",
                    element: <Movie />
                }
            ]
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "*",
            element: <Error />
        }
    ])
    return routesData
}

export default Routes