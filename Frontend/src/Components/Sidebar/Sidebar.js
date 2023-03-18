import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState, useEffect } from "react";
export default function MenuSidebar() {
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
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AllRecipes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            ALL RECIPES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/PeruvianDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            PERUVIAN DISHES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ZAFDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            SOUTH AFRICAN DISHES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SerbianDishes"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            SERBIAN DISHES
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
