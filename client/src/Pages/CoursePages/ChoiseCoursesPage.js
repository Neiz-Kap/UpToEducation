import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from '../../index.js';
import { fetchChoiseCourses } from "../../HTTP/choiseCoursesAPI"

import { Container, Row } from 'react-bootstrap';
import { CourseCard, FilterAside } from '../../Components'

const ChoiseCoursesPage = observer((props) => {
  const { card } = useContext(Context);
  useEffect(() => {
    fetchChoiseCourses().then(data => { card.setChoiseCardData(data); console.log(`data: ${data}`) })
  }, []);

  console.log(`card.choiseCardData: ${card.choiseCardData}`)

  return (
    <section>
      <h2>Избранные курсы из каталога</h2>
      <Row className="content content--sorting-list g-2">
        {card.choiseCardData.map(({ course_id, author, name, description, image, course_url, fone }) =>
          <CourseCard key={course_id} id={course_id} author={author} name={name} description={description} image={image} course_url={course_url}
            fone={fone}
          />
        )}
        <FilterAside />
      </Row>
    </section>
  );
});

export default ChoiseCoursesPage;
