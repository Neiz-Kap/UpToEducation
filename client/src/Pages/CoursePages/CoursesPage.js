import React from "react";

import { Tabs } from "../../Components";
import { Outlet } from "react-router-dom";

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
    <section className="content__section">
      <Tabs tabsList={courseTabs} />
      <Outlet />
    </section>
  );
};

export default CoursesPage;
