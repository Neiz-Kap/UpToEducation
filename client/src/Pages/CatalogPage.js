import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from '../index.js';
import { fetchCourses } from "../HTTP/coursesAPI"

import { Row, Container } from 'react-bootstrap';
import CourseCard from "../Components/CourseCard/CourseCard.js";
import FilterAside from "../Components/FilterAside.js";
import TypeBar from "../Components/TypeBar";
import BrandBar from "../Components/BrandBar";
// import { CourseCard, FilterAside } from '../Components/CourseCard/';

const CatalogOfCourses = observer((props) => {
  const { card } = useContext(Context);
  useEffect(() => {
    fetchCourses().then(data => card.setCardData(data.rows))
  }, [])

  return (
    <Container fluid>
      {/* <TypeBar />
      <BrandBar /> */}
      <Row className="content content--sorting-list g-2">
        {card.cardData.map(({ id, author, name, description, image, course_url, fone }) =>
          <CourseCard key={id} id={id} author={author} name={name} description={description} image={image} course_url={course_url}
            fone={fone}
          />
        )}
        <FilterAside />
      </Row>
    </Container>
  );
})

export default CatalogOfCourses;
