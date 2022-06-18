import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { FilterAside } from "../../Components";

import { CourseList } from "./../../Components";
import { useCustomContext } from "./../../Hooks";

const MyCoursesPage = observer((props) => {
  const { course } = useCustomContext();

  useEffect(() => {
    // fetchChoiseCourses().then((data) => {
    //   course.setChoiseCardData(data);
    //   console.log(`data: ${data}`);
    // });
  }, []);

  return (
    <section className="content__section">
      <h2>Добавленные мною курсы</h2>
      {/* <CourseList list={course.courseData} /> */}
      <CourseList list={null} />
      {/* <FilterAside /> */}
      {
        <>
          <h2 className="mt-3">На модерации</h2>
          {/* <CourseList list={} /> */}
        </>
      }
    </section>
  );
});

export default MyCoursesPage;
