import '../styles/components/_navbar.scss'
import { NavLink } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home02Icon,
  Search01Icon,
  ChampionIcon,
  UserSharingIcon,
} from "@hugeicons/core-free-icons";

function PcNavBar() {
    return (
        <div className="navbar">
            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/"><HugeiconsIcon icon={Home02Icon} size={36} aria-hidden="true" /><p>Home</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/search"><HugeiconsIcon icon={Search01Icon} size={36} aria-hidden="true" /><p>Search</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/leaderboard"><HugeiconsIcon icon={ChampionIcon} size={36} aria-hidden="true" /><p>Leader <br />Board</p></NavLink>

            <NavLink  className={({ isActive }) =>`navbar-link ${isActive ? "active" : ""}`} to="/profile"><HugeiconsIcon icon={UserSharingIcon} size={36} aria-hidden="true" /><p>Profile</p></NavLink>
        </div>
    )
}

export default PcNavBar 
