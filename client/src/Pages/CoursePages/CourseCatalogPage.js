import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import { fetchCourses } from "../../HTTP/coursesAPI";

import { CourseList, FilterAside, TypeBar, BrandBar } from "../../Components";
import { useCustomContext } from "./../../Hooks";

const CourseCatalogPage = observer((props) => {
  const { course } = useCustomContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses(true)
      .then((data) => course.setCourseData(data.rows))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <section className="content__section">
      {/* <TypeBar />
      <BrandBar /> */}
      {/* может 4 карточки, если Container fluid? */}
      <h2>Каталог курсов</h2>
      <CourseList
        list={course.courseData}
        isLoading={isLoading}
        countPlaceholder={4}
      />
      <FilterAside />
    </section>
  );
});

export default CourseCatalogPage;
