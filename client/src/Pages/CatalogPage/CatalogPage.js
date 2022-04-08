import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from '../../index.js';
import { fetchCourses } from "../../HTTP/coursesAPI"

import { Row } from 'react-bootstrap';
import { CourseCard, FilterAside } from '../../Components/';

const CatalogOfCourses = observer((props) => {
  const { card } = useContext(Context);
  useEffect(() => {
    fetchCourses().then(data => card.setCardData(data.rows))
  }, [])

  return (
    <Row className="content content--sorting-list g-2">
      {card.cardData.map(({ course_id, author, name, description, image, course_url, fone }) =>
        <CourseCard key={course_id} id={course_id} author={author} name={name} description={description} image={image} course_url={course_url}
          fone={fone}
        />
      )}
      <FilterAside />
    </Row>
  );
})

export default CatalogOfCourses;
