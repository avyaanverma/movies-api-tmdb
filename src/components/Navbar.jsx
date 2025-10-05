import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav >
        <div>
          <h1>Movie App</h1>
        </div>
        <div id="routes">
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/favourites">Favourites</Link>
        </div>
    </nav>
  )
}

export default Navbar