import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

import {
  COURSE_CATALOG_ROUTE,
  FAQ_ROUTE,
  INFO_ROUTE,
} from "../../Utils/consts.js";

const NavBar = (props) => {
  return (
    <section className="nav-section nav-section--visibility">
      <Container>
        <Nav className="justify-content-around" as="ul">
          <Nav.Item as="li">
            <NavLink to={COURSE_CATALOG_ROUTE}>Каталог</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to={INFO_ROUTE}>Информация о проекте</NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to={FAQ_ROUTE}>FAQ</NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </section>
  );
};

export default NavBar;
