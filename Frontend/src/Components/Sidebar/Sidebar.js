import { NavLink } from "react-router-dom";
import "./Sidebar.css";
export default function MenuSidebar() {
  const activeLinkStyle = {
    color: "rgb(253, 224, 9)",
    borderBottom: "1px solid rgb(253, 224, 9)",
  };
  return (
    <div class="sidebar">
      <ul class="menu">
        <li>
          <NavLink
            to="/Recipes Inc"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            MY STORY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
