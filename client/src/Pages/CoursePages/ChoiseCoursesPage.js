import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index.js";
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { Container, Row } from "react-bootstrap";
import { CourseCard, FilterAside } from "../../Components";
import CoursePlaceholderCard from "./../../Components/CourseCard/CoursePlaceholderCard";

const ChoiseCoursesPage = observer((props) => {
  const { course } = useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchChoiseCourses().then((data) => {
      course.setChoiseCardData(data);
      setLoading(true);
      console.log(`data: ${data}`);
    });
  }, []);

  console.log(`course.choiseCardData: ${course.choiseCardData}`);

  if (loading) {
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
  }
  return <CoursePlaceholderCard />;
});

export default ChoiseCoursesPage;
