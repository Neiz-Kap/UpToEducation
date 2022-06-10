import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import { fetchCourses } from "../../HTTP/coursesAPI";

import { Row, Container } from "react-bootstrap";
import { CourseCard, FilterAside, TypeBar, BrandBar } from "../../Components";

const CourseCatalogPage = observer((props) => {
  const { course } = useContext(Context);
  useEffect(() => {
    fetchCourses(true).then((data) => course.setCourseData(data.rows));
  }, []);

  return (
    <section className="constent__section">
      {/* <TypeBar />
      <BrandBar /> */}
      {/* может 4 карточки, если Container fluid? */}
      <h1>Каталог курсов</h1>
      <Row className="content content--sorting-list g-2">
        {course.courseData.map(
          ({ id, author, name, description, image, course_url, fone }) => (
            <CourseCard
              key={id}
              id={id}
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

export default CourseCatalogPage;
