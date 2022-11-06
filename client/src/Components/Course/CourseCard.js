import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useLocation } from "react-router";

import "./CourseCard.css";

import { useCustomContext } from "../../Hooks";

import {
  createChoiseCourse,
  deleteChoiseCourse,
} from "../../HTTP/choiseCoursesAPI.js";
import {
  fetchCourses,
  fetchCourse,
  deleteCourse,
  updateCourse,
  createCourse,
} from "../../HTTP/coursesAPI.js";

import { Col, Card, OverlayTrigger, Popover } from "react-bootstrap";
import AddCourse from "../AddCourse/AddCourse";

import edit from "../../Assets/cardIcons/edit.svg";
import star from "../../Assets/cardIcons/star.svg";
import remove from "../../Assets/cardIcons/delete.svg";
import more from "../../Assets/cardIcons/more.svg";
import share from "../../Assets/cardIcons/share.svg";
import comment from "../../Assets/cardIcons/comment.svg";
import done from "../../Assets/admin/done.svg";
import clear from "../../Assets/admin/clear.svg";

import {
  COURSE_ROUTE,
  COURSE_CATALOG_FULL_ROUTE,
  CHOISE_COURSES_FULL_ROUTE,
  ADMIN_COURSES_FULL_ROUTE,
  SERVER_LINK,
} from "../../Utils/consts";
import { getUrl } from "./../../Utils/helpers";

// Альтернативный вариант карточки
// https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog/community?lb=UgkxeXByOWLPygBXbtF7-J98QEdiOPCR4hep

const CourseCard = observer((props) => {
  const { user, course } = useCustomContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(false);
  const [dataCourse, setDataCourse] = useState({});

  let realFone = props.fone[0] !== "#" ? `#${props.fone}` : props.fone;
  let urlCourse = props.course_url.includes("http://", 0)
    ? props.course_url
    : `https://${props.course_url}`;
  let imageUrl = `${SERVER_LINK}/${props.image}`;

  const getDataToModal = () => {
    setLgShow(true);
    fetchCourse(props.id).then((data) => setDataCourse(data));
  };

  const interactCourseToChoise = () => {
    if (location.pathname === CHOISE_COURSES_FULL_ROUTE) {
      console.log(`Ща удаление должно быть`);
      deleteChoiseCourse(props.id);
    } else {
      createChoiseCourse(props.id).catch((err) =>
        alert(err.response.data.message)
      );
    }
  };

  const doneCourse = () => {
    let courseObj = { id: props.id, isModerated: true };
    updateCourse(courseObj).catch((err) =>
      console.log(err.response.data.message)
    );
  };

  const removeCourse = (e) => {
    deleteCourse(props.id).then(() => {
      fetchCourses()
        .then((data) => course.setCourseData(data.rows))
        .catch((err) => console.log(err.response.data.message));
    });
    console.log(`Курс с id ${props.id} удалён`);
    console.log(`Перерисовка страницы где?`);
  };

  const copyLink = () => {
    let id = props.id;
    navigator.clipboard.writeText(
      getUrl([SERVER_LINK, COURSE_ROUTE, "/", id], false)
    );
  };

  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card className="content-card" style={{ backgroundColor: realFone }}>
        <Card.Header className="content-card-header d-flex justify-content-between align-items-center">
          {user.user.role === "ADMIN" && props.id + ")"} [{props.author}]
          {user.isAuth && (
            <div className="card__buttons w-100 d-flex justify-content-end">
              {(location.pathname === COURSE_CATALOG_FULL_ROUTE ||
                location.pathname === CHOISE_COURSES_FULL_ROUTE) && (
                <>
                  <button className="card__button remove me-3" type="button">
                    <img
                      src={remove}
                      alt="remove"
                      onClick={(e) => removeCourse(e)}
                    />
                  </button>
                  <button
                    className="card__button star added"
                    type="button"
                    onClick={interactCourseToChoise}
                  >
                    <img src={star} alt="add" />
                  </button>
                </>
              )}
              {location.pathname === ADMIN_COURSES_FULL_ROUTE && (
                <>
                  <button className="card__button me-3" type="button">
                    <img src={done} alt="done" onClick={(e) => doneCourse(e)} />
                  </button>
                  <button
                    className="card__button star"
                    type="button"
                    onClick={(e) => removeCourse(e)}
                  >
                    <img src={clear} alt="clear" />
                  </button>
                </>
              )}

              {/* <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Body
                      className="card__popup"
                      style={{ backgroundColor: realFone }}
                    >
                      <button className="card__button edit" type="button">
                        <img src={edit} alt="edit" onClick={getDataToModal} />
                      </button>
                      <AddCourse
                        show={lgShow}s
                        onHide={() => setLgShow(false)}
                        key={dataCourse.id}
                        id={dataCourse.id}
                        author={dataCourse.author}
                        name={dataCourse.name}
                        description={dataCourse.description}
                        image={dataCourse.image}
                        course_url={dataCourse.course_url}
                        fone={dataCourse.fone}
                      />
                      <button
                        className="card__button share"
                        type="button"
                        onClick={copyLink}
                      >
                        <img src={share} alt="share" />
                      </button>
                      <button className="card__button comment" type="button">
                        <img src={comment} alt="comment" />
                      </button>
                    </Popover.Body>
                  </Popover>
                }
              >
                <button className="card__button more" type="button">
                  <img src={more} alt="more" />
                </button>
              </OverlayTrigger> */}
            </div>
          )}
        </Card.Header>

        <Card.Img
          src={imageUrl}
          alt="Изображение курса"
          onClick={() => navigate(getUrl([COURSE_ROUTE, "/", props.id], false))}
          style={{ cursor: "pointer" }}
        />
        {/*             <input type="checkbox" className="read-more-checker" id={`read-more-checker-${props.id}`} />*/}
        <Card.Body>
          <Card.Title className="mb-2">{props.name}</Card.Title>
          <Card.Text className="card-body-text d-flex">
            Ссылка:
            <Card.Link
              href={urlCourse}
              className="d-block ms-1"
              target="_blank"
            >
              Начать изучение курса
            </Card.Link>
          </Card.Text>
          <Card.Text className="card-body-text" title={props.description}>
            {props.description}
          </Card.Text>
          {/* <div className="card-body-bottom"></div>*/}
        </Card.Body>
        {/* <Card.Button
          onClick={() => navigate(getUrl([COURSE_ROUTE, "/", props.id]))}
        >
          Подробнее
        </Card.Button> */}
        {/* <label htmlFor={`read-more-checker-${props.id}`} className="read-more-button"></label>*/}
      </Card>
    </Col>
  );
});

export default CourseCard;
