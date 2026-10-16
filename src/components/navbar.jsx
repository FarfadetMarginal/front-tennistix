import '../styles/components/_navbar.scss'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar">
            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/"><i className="hgi hgi-stroke hgi-rounded hgi-home-02"></i><p>Home</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/search"><i className="hgi hgi-stroke hgi-rounded hgi-search-01"></i><p>Search</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/leaderboard"><i className="hgi hgi-stroke hgi-rounded hgi-champion"></i><p>Leader <br />Board</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/profile"><i className="hgi hgi-stroke hgi-rounded hgi-user-sharing"></i><p>Profile</p></NavLink>

            <div className='navbar-legals-div'>
                <NavLink  className='navbar-legals' to="/legals#s1legals"><p>General Terms of Use</p></NavLink>
                <NavLink  className='navbar-legals' to="/legals#s2legals"><p>Privacy Policy</p></NavLink>
                <NavLink  className='navbar-legals' to="/legals#s3legals"><p>Legal Notice</p></NavLink>
            </div>
        </div>
    )
}

export default NavBar 