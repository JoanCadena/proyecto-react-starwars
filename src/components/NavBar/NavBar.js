import { NavLink } from "react-router-dom";
import "./NavBar.styles.css";
import imagen from "../../assets/sw_logo_stacked.png";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="h-100">
        <ul>
          <li className="p-0">
            <img src={imagen} className="w-25"></img>
          </li>
          <li>
            <NavLink to="/1">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/2">CHARACTERS</NavLink>
          </li>
          <li>
            <NavLink to="/3">VEHICLES</NavLink>
          </li>
          <li>
            <NavLink to="/4">STARSHIPS</NavLink>
          </li>
          <li>
            <NavLink to="/login">LOG IN</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SIGN UP</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
