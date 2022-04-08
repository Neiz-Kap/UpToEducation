import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import './CourseCard.css';

import { Context } from "../../index.js";

import { fetchCourses, fetchCourse, deleteCourse, updateCourse, createCourse } from "../../HTTP/coursesAPI.js";
import { createChoiseCourse } from "../../HTTP/choiseCoursesAPI.js";

import { Col, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import { AddCourse } from "../../Components";

import edit from '../../Image/card-icons/edit.svg';
import star from '../../Image/card-icons/star.svg';
import remove from '../../Image/card-icons/delete.svg';
import more from '../../Image/card-icons/more.svg';
import share from '../../Image/card-icons/share.svg';
import comment from '../../Image/card-icons/comment.svg';

const CourseCard = observer((props) => {
  const { user } = useContext(Context);
  const { card } = useContext(Context);
  const [lgShow, setLgShow] = useState(false);
  const [dataCourse, setDataCourse] = useState({});

  let realFone = props.fone[0] !== '#' ? `#${props.fone}` : props.fone;
  let urlCourse = props.course_url.includes('http://', 0) ? props.course_url : `https://${props.course_url}`;
  let imageUrl = `http://localhost:8888/${props.image}`;

  const getDataToModal = () => {
    setLgShow(true);
    fetchCourse(props.id).then(data => setDataCourse(data));
  }

  const removeCourse = (e) => {

    deleteCourse(props.id);
    console.log(`Курс с id ${props.id} удалён`);
    try {
      fetchCourses().then(data => card.setCardData(data.rows));
    }
    catch (error) { console.log(error.mesage); }
    console.log(`Перерисовка страницы`);
  }

  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <Card className="content-card" style={{ backgroundColor: realFone }}>
        <Card.Header className="content-card-header d-flex
justify-content-between align-items-center">
          {props.id}) {props.author}
          {
            user.isAuth && <div className="card__buttons w-100 d-flex justify-content-between">
              <button className="card__button remove" type="button">
                <img src={remove} alt="remove"
                  onClick={(e) => removeCourse(e)}
                />
              </button>
              <button className="card__button star added" type="button">
                <img src={star} alt="add" />
              </button>

              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Content className="card__popup"
                      style={{ backgroundColor: realFone }}>
                      <button className="card__button edit" type="button">
                        <img src={edit} alt="edit"
                          onClick={getDataToModal}
                        />
                      </button>
                      <AddCourse show={lgShow} onHide={() => setLgShow(false)}

                        key={dataCourse.course_id} id={dataCourse.course_id} author={dataCourse.author} name={dataCourse.name} description={dataCourse.description} image={dataCourse.image} course_url={dataCourse.course_url}
                        fone={dataCourse.fone}
                      />
                      <button className="card__button share" type="button">
                        <img src={share} alt="share" />
                      </button>
                      <button className="card__button comment" type="button">
                        <img src={comment} alt="comment" />
                      </button>
                    </Popover.Content>
                  </Popover>
                }>
                <button className="card__button more" type="button"><img src={more} alt="more" />
                </button>
              </OverlayTrigger>
            </div>
          }
        </Card.Header>

        <Card.Img src={imageUrl} alt="Изображение курса" />
        {/*             <input type="checkbox" className="read-more-checker" id={`read-more-checker-${props.id}`} />*/}
        <Card.Body>
          <Card.Title className="mb-2">{props.name}</Card.Title>
          <Card.Text className="card-body-text d-flex">
            Ссылка:<Card.Link href={urlCourse} className="d-block ml-1" target="_blank">
              {urlCourse}
            </Card.Link>
          </Card.Text>
          <Card.Text className="card-body-text" title={props.description}>
            {props.description}
          </Card.Text>
          {/* <div className="card-body-bottom"></div>*/}
        </Card.Body>
        {/* <label htmlFor={`read-more-checker-${props.id}`} className="read-more-button"></label>*/}
      </Card>
    </Col>
  );
})


export default CourseCard;
