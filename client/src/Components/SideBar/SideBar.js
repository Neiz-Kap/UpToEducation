import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";
import AddCourse from "../Header/AddCourse";
import "./SideBar.css";

import addCourse from "../../Assets/admin/add.svg";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  // Курсы=>{Каталог, Избранные, Мои(userCourses на бэке)}
  // Чат
  // Личный кабинет
  // Настройки
  // Поддержка
  // Инфо
  return (
    <section className="nav-section">
      <nav div className="navigation">
        <ul className="sidebar__nav" as="ul">
          {SidebarData.map((menuItem) => {
            return <SubMenu key={menuItem.id} menuItem={menuItem} />;
          })}
          <button className="header-add-course" onClick={() => setLgShow(true)}>
            <img src={addCourse} alt="addCourse" />
          </button>
        </ul>
      </nav>
      <AddCourse show={lgShow} onHide={() => setLgShow(false)} />
    </section>
  );
};

export default SideBar;
