import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Nav, Offcanvas, Button } from 'react-bootstrap';

import {
  CATALOG_ROUTE, FAQ_ROUTE, INFO_ROUTE
} from '../../Utils/consts.js'

const SideBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);


  // Курсы=>{Каталог, Избранные, Мои(userCourses на бэке)}
  // Чат
  // Личный кабинет
  // Настройки
  // Поддержка
  // Инфо
  return (
    <section className="nav-section nav-section--visibility">
      <Nav className="justify-content-around" as="ul">
        <Nav.Item as="li">
          <NavLink to={CATALOG_ROUTE}>Каталог</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={INFO_ROUTE}>Информация о проекте</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={FAQ_ROUTE}>FAQ</NavLink>
        </Nav.Item>
      </Nav>
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          чё?
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Body>
            <Nav className="justify-content-around" as="ul">
              <Nav.Item as="li">
                <NavLink to={CATALOG_ROUTE}>Каталог</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={INFO_ROUTE}>Информация о проекте</NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={FAQ_ROUTE}>FAQ</NavLink>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </section >

  );
}

export default SideBar;
