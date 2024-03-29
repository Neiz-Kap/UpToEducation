import React from "react";
import { Row } from "react-bootstrap";

import { MY_COURSES_FULL_ROUTE } from "./../../Utils/consts";
import CourseCard from "./CourseCard";
import CoursePlaceholderCard from "./CoursePlaceholderCard";

const CourseList = ({
  list,
  isLoading,
  children,
  countPlaceholder = 4,
  altText,
}) => {
  const renderCoursePlaceholder = () => {
    let menuItems = [];
    for (var i = 0; i < countPlaceholder; i++) {
      menuItems.push(<CoursePlaceholderCard key={i} />);
    }
    return <React.Fragment>{menuItems}</React.Fragment>;
  };

  return (
    <Row className="content content--sorting-list g-3">
      {children}
      {!isLoading &&
        list &&
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
              author={course_author?.name}
              name={name}
              description={description}
              image={image}
              course_url={course_url}
              fone={fone}
            />
          )
        )}
      {!isLoading && list.length === 0 && altText && <p>{altText}</p>}
      {isLoading && renderCoursePlaceholder()}
    </Row>
  );
};

export default CourseList;
