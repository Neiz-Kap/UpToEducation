import React from "react";

import { Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

import {
  COURSE_CATALOG_FULL_ROUTE,
  MY_COURSES_FULL_ROUTE,
  CHOISE_COURSES_FULL_ROUTE,
} from "./../../Utils/consts";

const CoursesPage = () => {
  return (
    <section>
      <Nav className="justify-content-around nav-tabs" as="ul">
        <Nav.Item as="li">
          <NavLink to={COURSE_CATALOG_FULL_ROUTE}>Course Catalog</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={CHOISE_COURSES_FULL_ROUTE}>Choises Courses</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={MY_COURSES_FULL_ROUTE}>My Added Courses</NavLink>
        </Nav.Item>
      </Nav>
      <Outlet />
    </section>
  );
};

export default CoursesPage;
