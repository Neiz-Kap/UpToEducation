import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index.js";
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { Container, Row } from "react-bootstrap";
import { CourseList, FilterAside } from "../../Components";

const ChoiseCoursesPage = observer((props) => {
  const { course } = useContext(Context);
  useEffect(() => {
    // fetchChoiseCourses().then((data) => {
    //   course.setChoiseCardData(data);
    //   setLoading(true);
    //   console.log(`data: ${data}`);
    // });
  }, []);

  console.log(`course.choiseCardData: ${course.choiseCardData}`);

  return (
    <section className="content__section">
      <h2>Избранные курсы из каталога</h2>
      <CourseList />
      <FilterAside />
    </section>
  );
});

export default ChoiseCoursesPage;
