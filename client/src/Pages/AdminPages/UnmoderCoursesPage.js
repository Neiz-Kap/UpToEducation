import React, { useEffect, useState } from "react";
import { useCustomContext } from "../../Hooks";
import { observer } from "mobx-react-lite";
import { fetchCourses } from "./../../HTTP/coursesAPI";
import { Row } from "react-bootstrap";
import { CourseList } from "../../Components";

const UnmoderCoursesPage = observer(() => {
  const { course } = useCustomContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourses(false)
      .then((data) => course.setUnmoderatedCourseData(data.rows))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);
  return (
    <section className="content__section">
      <h2>Курсы на модерацию</h2>
      <CourseList
        list={course.unmoderatedCourseData}
        isLoading={isLoading}
        countPlaceholder={4}
        altText={`Вы хорошо потрудились и у вас нет курсов для модерации :) /n ну или у вас не популярный сервис и вы никому не нужны ;(`}
      />
    </section>
  );
});

export default UnmoderCoursesPage;
