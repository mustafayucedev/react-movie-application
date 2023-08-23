import { useRoutes } from "react-router-dom"

import Home from "pages/Home"
import Movie from "pages/Movie"
import Popular from "pages/Popular"
import TopRated from "pages/TopRated"
import UpComing from "pages/UpComing"
import Search from "pages/Search"
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
            path: "/popular",
            element: <Popular/>
        },
        {
            path: "/toprated",
            element: <TopRated/>
        },
        {
            path: "/upcoming",
            element: <UpComing/>
        },
        {
            path: "/search",
            element: <Search/>
        },
        {
            path: "*",
            element: <Error />
        }
    ])
    return routesData
}

export default Routes