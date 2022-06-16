import React, { useEffect } from "react";
import { useCustomContext } from "../../Hooks";
import { observer } from "mobx-react-lite";
import { fetchCourses } from "./../../HTTP/coursesAPI";
import { Row } from "react-bootstrap";
import { CourseCard } from "../../Components";

const UnmoderCoursesPage = observer(() => {
  const { course } = useCustomContext();
  useEffect(() => {
    fetchCourses(false).then((data) =>
      course.setUnmoderatedCourseData(data.rows)
    );
  }, []);
  return (
    <section className="content__section">
      <h1>Unmoderated Courses</h1>
      <Row className="content content--sorting-list g-2">
        {course.unmoderatedCourseData.map(
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
      </Row>
    </section>
  );
});

export default UnmoderCoursesPage;
