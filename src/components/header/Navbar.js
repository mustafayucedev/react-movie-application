import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav>
            <ul className="flex gap-8">
                <li>
                    <Link to="/" title="Homepage" className="text-sm text-white hover:underline">Homepage</Link>
                </li>
                <li>
                    <Link to="/about" title="About" className="text-sm text-white hover:underline">About</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar