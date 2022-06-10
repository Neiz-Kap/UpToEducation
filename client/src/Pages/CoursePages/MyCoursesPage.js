import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../index.js";
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI";

import { Container, Row, Card, Col } from "react-bootstrap";
import { CourseCard, FilterAside, AddCourse } from "../../Components";

import addCourse from "../../Assets/admin/add.svg";

const ChoiseCoursesPage = observer((props) => {
  const { course, user } = useContext(Context);
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    fetchChoiseCourses().then((data) => {
      course.setChoiseCardData(data);
      console.log(`data: ${data}`);
    });
  }, []);

  // console.log(`course.choiseCardData: ${course.choiseCardData}`)

  return (
    <section className="constent__section">
      <h1>Добавленные мною курсы</h1>
      <Row className="content content--sorting-list g-2">
        <Col xs={12} sm={6} lg={4} className="mb-4">
          <Card
            className="content-card"
            style={{ backgroundColor: "transparent" }}
          >
            <button
              className="header-add-course"
              onClick={() => setLgShow(true)}
            >
              <img src={addCourse} alt="addCourse" />
            </button>
          </Card>
        </Col>

        {/* <CourseCard
          key={course_id}
          id={course_id}
          author={author}
          name={name}
          description={description}
          image={image}
          course_url={course_url}
          fone={fone}
        /> */}
        {/* {course.choiseCardData?.map(
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
        <FilterAside /> */}
        <AddCourse show={lgShow} onHide={() => setLgShow(false)} />
      </Row>
    </section>
  );
});

export default ChoiseCoursesPage;
