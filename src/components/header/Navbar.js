import NavbarData from "data/navbar.json"
import { Link } from "react-router-dom"
import { useMovie } from "context/movie"
import { useEffect } from "react"

const Navbar = () => {

    const { navbar,setNavbar,setHamburger } = useMovie()

    useEffect(() => {
        setNavbar(NavbarData)
    },[setNavbar])

  return (
    <>
        <nav className="w-full">
            <ul className="lg:flex lg:gap-8 lg:static lg:border-none absolute top-[90px] left-0 z-10 bg-secondary w-full p-1 border">
                {navbar &&
                    navbar.map((item,index) => (
                        <li key={index} className="xl:p-0 p-2">
                            <Link to={item.url} title={item.name} className="text-sm text-white hover:underline" onClick={() => setHamburger(false)}> {item.name} </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </>
  )
}

export default Navbar