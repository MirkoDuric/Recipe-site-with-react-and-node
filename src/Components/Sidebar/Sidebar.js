import { NavLink } from "react-router-dom";
import "./Sidebar.css";
export default function MenuSidebar(props) {
  const activeLinkStyle = {
    color: "rgb(253, 224, 9)",
    borderBottom: "1px solid rgb(253, 224, 9)",
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            onClick={props.resetToggle}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AllRecipes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            onClick={props.resetToggle}
          >
            ALL RECIPES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/PeruvianDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            onClick={props.resetToggle}
          >
            PERUVIAN DISHES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ZAFDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            onClick={props.resetToggle}
          >
            SOUTH AFRICAN DISHES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SerbianDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            onClick={props.resetToggle}
          >
            SERBIAN DISHES
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
