import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import { fetchCourses } from "../../HTTP/coursesAPI";

import { CourseList, FilterAside, TypeBar, BrandBar } from "../../Components";
import { useCustomContext } from "./../../Hooks";

const CourseCatalogPage = observer((props) => {
  const { course } = useCustomContext();
  useEffect(() => {
    fetchCourses(true).then((data) => course.setCourseData(data.rows));
  }, []);

  return (
    <section className="content__section">
      {/* <TypeBar />
      <BrandBar /> */}
      {/* может 4 карточки, если Container fluid? */}
      <h2>Каталог курсов</h2>
      <CourseList list={course.courseData} />
      <FilterAside />
    </section>
  );
});

export default CourseCatalogPage;
