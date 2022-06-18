import React from "react";
import { Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AddCourseButton from "./../AddCourse/AddCourseButton";

import { MY_COURSES_FULL_ROUTE } from "./../../Utils/consts";
import CourseCard from "./CourseCard";
import CoursePlaceholderCard from "./CoursePlaceholderCard";

const CourseList = ({ list }) => {
  const location = useLocation();
  return (
    <Row className="content content--sorting-list g-3">
      {location.pathname === MY_COURSES_FULL_ROUTE && <AddCourseButton />}

      {list ? (
        list.map(
          ({
            id,
            course_author,
            name,
            description,
            image,
            course_url,
            fone,
          }) => (
            <CourseCard
              key={id}
              id={id}
              author={course_author.name}
              name={name}
              description={description}
              image={image}
              course_url={course_url}
              fone={fone}
            />
          )
        )
      ) : (
        <>
          <CoursePlaceholderCard />
          <CoursePlaceholderCard />
          <CoursePlaceholderCard />
          <CoursePlaceholderCard />
        </>
      )}
    </Row>
  );
};

export default CourseList;
