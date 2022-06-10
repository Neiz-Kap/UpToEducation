import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";
import "./SideBar.css";
import { useCustomContext } from "../../Hooks";

const SideBar = () => {
  const { user } = useCustomContext();
  return (
    <section className="nav-section">
      <nav className="navigation">
        <ul className="sidebar__nav" as="ul">
          {SidebarData(user.user.role === "ADMIN")
            .filter((menuItem) => menuItem.isPublic)
            .map((menuItem) => {
              return <SubMenu key={menuItem.id} menuItem={menuItem} />;
            })}
        </ul>
      </nav>
    </section>
  );
};
export default SideBar;
