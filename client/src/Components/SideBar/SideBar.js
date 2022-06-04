import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";
import "./SideBar.css";

const SideBar = () => {
  // Курсы=>{Каталог, Избранные, Мои(userCourses на бэке)}
  // Чат
  // Личный кабинет
  // Настройки
  // Поддержка
  // Инфо
  return (
    <section className="nav-section">
      <nav className="navigation">
        <ul className="sidebar__nav" as="ul">
          {SidebarData.map((menuItem) => {
            return <SubMenu key={menuItem.id} menuItem={menuItem} />;
          })}
        </ul>
      </nav>
    </section>
  );
};

export default SideBar;
