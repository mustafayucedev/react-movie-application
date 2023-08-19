import NavbarData from "data/navbar.json"
import { Link } from "react-router-dom"
import { useMovie } from "context/movie"
import { useEffect } from "react"

const Navbar = () => {

    const { navbar,setNavbar } = useMovie()

    useEffect(() => {
        setNavbar(NavbarData)
    },[setNavbar])

  return (
    <>
        <nav>
            <ul className="flex gap-8">
                {navbar &&
                    navbar.map((item,index) => (
                        <li key={index}>
                            <Link to={item.url} title={item.name} className="text-sm text-white hover:underline"> {item.name} </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </>
  )
}

export default Navbar