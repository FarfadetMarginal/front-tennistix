import '../styles/components/_navbar.scss'
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/login">Search</Link>
            <Link to="/login">Leader Board</Link>
            <Link to="/login">Profile</Link>
        </div>
    )
}

export default NavBar