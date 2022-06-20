import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { useCustomContext } from "./../../Hooks";
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { Container, Row } from "react-bootstrap";
import { CourseList, CoursePlaceholderCard } from "../../Components";

const ChoiseCoursesPage = observer((props) => {
  const { course } = useCustomContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchChoiseCourses()
      .then((data) => {
        course.setChoiseCourseData(data);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <section className="content__section">
      <h2>Избранные курсы из каталога</h2>
      <CourseList
        list={course.choiseCourseData}
        isLoading={isLoading}
        countPlaceholder={4}
        altText={`На данный момент у вас нет избранных курсов! (Их можно добавить в
          Избранное, кликнув по Звёздочке в карточке курса, на странице
          "Каталога Курсов")`}
      />
    </section>
  );
});

export default ChoiseCoursesPage;
