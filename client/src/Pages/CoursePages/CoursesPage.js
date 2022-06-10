import React from "react";

import { NavLink, Outlet } from "react-router-dom";

import { Tabs } from "../../Components";
import {
  COURSE_CATALOG_FULL_ROUTE,
  MY_COURSES_FULL_ROUTE,
  CHOISE_COURSES_FULL_ROUTE,
} from "./../../Utils/consts";

const CoursesPage = () => {
  const courseTabs = [
    {
      path: COURSE_CATALOG_FULL_ROUTE,
      title: "Course Catalog",
    },
    {
      path: CHOISE_COURSES_FULL_ROUTE,
      title: "Choises Courses",
    },
    {
      path: MY_COURSES_FULL_ROUTE,
      title: "My Added Courses",
    },
  ];
  return (
    <section className="constent__section">
      <Tabs tabsList={courseTabs} />
      <Outlet />
    </section>
  );
};

export default CoursesPage;
