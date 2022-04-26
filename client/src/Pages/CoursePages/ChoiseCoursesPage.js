import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index.js";
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { Container, Row } from "react-bootstrap";
import { CourseCard, FilterAside } from "../../Components";

const ChoiseCoursesPage = observer((props) => {
  const { course } = useContext(Context);
  useEffect(() => {
    fetchChoiseCourses().then((data) => {
      course.setChoiseCardData(data);
      console.log(`data: ${data}`);
    });
  }, []);

  console.log(`card.choiseCardData: ${course.choiseCardData}`);

  return (
    <section>
      <h2>Избранные курсы из каталога</h2>
      <Row className="content content--sorting-list g-2">
        {course.choiseCardData.map(
          ({
            course_id,
            author,
            name,
            description,
            image,
            course_url,
            fone,
          }) => (
            <CourseCard
              key={course_id}
              id={course_id}
              author={author}
              name={name}
              description={description}
              image={image}
              course_url={course_url}
              fone={fone}
            />
          )
        )}
        <FilterAside />
      </Row>
    </section>
  );
});

export default ChoiseCoursesPage;
