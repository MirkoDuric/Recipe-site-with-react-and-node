import "./Header.css";
import MenuButton from "../Sidebar/SidebarButton";
import MenuSidebar from "../Sidebar/Sidebar";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <div
      className="header
    "
    >
      <h4>Recipes Inc</h4>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
