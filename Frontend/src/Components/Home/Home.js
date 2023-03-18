import { useState } from "react";
import MenuButton from "../Sidebar/SidebarButton";
import MenuSidebar from "../Sidebar/Sidebar";
import "./Home.css";
export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="homepage-bkg">
        <div className="title-layer"></div>
        <h3>Welcome to Recipes Inc</h3>
      </div>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
