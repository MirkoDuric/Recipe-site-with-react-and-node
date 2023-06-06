import "./Header.css";
import MenuButton from "../Sidebar/SidebarButton";
import MenuSidebar from "../Sidebar/Sidebar";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const [MenuButtonClass, setMenuButtonClass] = useState("toggle");

  const setNewClassName = () => {
    setActive((prevState) => !prevState);
    setMenuButtonClass((prevState) =>
      prevState === "toggle" ? "toggle active" : "toggle"
    );
  };

  return (
    <div className="header">
      <h4>Recipes Inc</h4>
      <MenuButton className={MenuButtonClass} activeTggle={setNewClassName} />
      {active ? (
        <MenuSidebar
          resetToggle={() => {
            setNewClassName();
          }}
        />
      ) : null}
    </div>
  );
}
