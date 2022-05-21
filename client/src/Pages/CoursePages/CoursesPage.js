import React from "react";

import { Nav } from "react-bootstrap";
import CourseCatalogPage from "./CourseCatalogPage";
import ChoiseCoursesPage from "./ChoiseCoursesPage";
import MyCoursesPage from "./MyCoursesPage";

import { Switch, NavLink, Route } from "react-router-dom";

import {
  COURSE_CATALOG_ROUTE,
  MY_COURSES_ROUTE,
  CHOISE_COURSES_ROUTE,
} from "./../../Utils/consts";

const CoursesPage = () => {
  return (
    <section>
      <Nav className="justify-content-around nav-tabs" as="ul">
        <Nav.Item as="li">
          <NavLink to={COURSE_CATALOG_ROUTE}>Course Catalog</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={CHOISE_COURSES_ROUTE}>Choises Courses</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to={MY_COURSES_ROUTE}>My Added Courses</NavLink>
        </Nav.Item>
      </Nav>
      <Route path={COURSE_CATALOG_ROUTE} component={MyCoursesPage} exact />
      <Route path={CHOISE_COURSES_ROUTE} component={CourseCatalogPage} exact />
      <Route path={MY_COURSES_ROUTE} component={ChoiseCoursesPage} exact />
    </section>
  );
};

export default CoursesPage;
