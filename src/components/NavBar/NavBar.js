import { NavLink } from "react-router-dom";
import "./NavBar.styles.css";
import imagen from "../../assets/sw_logo_stacked.png";

const NavBar = () => {
  const routes = [
    { route: "/home", label: "home", customClass: "underbar--green" },
    { route: "/characters", label: "characters", customClass: "underbar--red" },
    { route: "/vehicles", label: "vehicles", customClass: "underbar--blue" },
    {
      route: "/starships",
      label: "starships",
      customClass: "underbar--violet",
    },
  ];
  return (
    <header className="header sticky-top">
      <nav className="h-100">
        <ul>
          <div className="d-flex flex-row h-100 me-auto">
            <li className="p-0">
              <img src={imagen} className="w-25" />
            </li>
            {routes.map((navInfo, index) => (
              <li key={index}>
                <NavLink to={navInfo.route} end>
                  {navInfo.label}
                </NavLink>
                <span className={`underbar ${navInfo.customClass}`}></span>
              </li>
            ))}
          </div>
          <li style={{ borderLeft: "1px solid #333333" }}>
            <NavLink to="/log_in">log in</NavLink>
            <span className="underbar underbar--silver"></span>
          </li>
          <li style={{ borderRight: "0px" }}>
            <NavLink to="/sign_up">sign up</NavLink>
            <span className="underbar underbar--gold"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
