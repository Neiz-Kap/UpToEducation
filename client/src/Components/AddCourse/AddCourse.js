import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDisplayImage, useCustomContext } from "../../Hooks";

import "./AddCourse.css";

import { COURSE_CATALOG_FULL_ROUTE } from "../../Utils/consts.js";
import {
  createCourse,
  fetchCourses,
  fetchOccupations,
} from "../../HTTP/coursesAPI.js";

import { Card, Button, Modal, Row, Col, Form } from "react-bootstrap";

const AddCourse = ({ show, onHide }) => {
  const { course, user } = useCustomContext();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [colorCard, setColorCard] = useState("#192534");
  const [name, setName] = useState("");
  const [urlCourse, setUrlCourse] = useState("");
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState(null);

  const { result, uploader } = useDisplayImage();

  useEffect(() => {
    fetchOccupations().then((data) => {
      course.setOccupations(data);
    });
  }, []);

  const addCourse = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("course_url", urlCourse);
    formData.append("fone", colorCard);
    formData.append("image", image);
    formData.append("occupation", occupation);
    formData.append("author", author);
    // formData.append("publicator", author);

    createCourse(formData).then(() => {
      fetchCourses().then((data) => course.setCourseData(data.rows));
      navigate(COURSE_CATALOG_FULL_ROUTE);
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className="card__modal"
      size="lg"
      centered
    >
      <Modal.Body>
        <Card
          className="content-card"
          style={{ backgroundColor: `${colorCard}` }}
        >
          <Form method="post">
            <Card.Header className="content-card-header">
              <Form.Label className="font-weight-bold text-center">
                Create course
              </Form.Label>
              <Row>
                <Col className="ps-2">
                  <Form.Control
                    className="card-form"
                    type="text"
                    name="author"
                    placeholder="Введите автора"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="ms-auto p-0"
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    onChange={(e) => setColorCard(e.target.value)}
                    value={`${colorCard}`}
                  />
                </Col>
              </Row>

              <Form.Group className="card__group">
                <Form.Control
                  className="card-form p-0 mt-2"
                  id="image"
                  type="file"
                  name="image"
                  label="Paste or select image"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    uploader(e);
                  }}
                />
              </Form.Group>
            </Card.Header>

            {result && <Card.Img src={result} alt="Image of course" />}
            <Card.Body>
              <Card.Title className="mb-2">
                <Form.Control
                  className="card-form"
                  type="name"
                  placeholder="Введите название курса"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Card.Title>

              <Row>
                <Col>
                  <Card.Text className="ps-2 my-2">Link:</Card.Text>
                </Col>
                <Col>
                  <Form.Control
                    className="card-form"
                    type="text"
                    name="url"
                    placeholder="Введите ссылку на материал"
                    required
                    value={urlCourse}
                    onChange={(e) => setUrlCourse(e.target.value)}
                  />
                </Col>
              </Row>
              <Form.Control
                as="textarea"
                className="card-form mb-2"
                name="description"
                placeholder="Введите детальное описание"
                required
                style={{ minHeight: 120 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control
                className="card-form mb-2"
                name="description"
                placeholder="Укажите профессию"
                required
                list="searchList"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
              <datalist className="mb-2" id="searchList">
                {course.occupations.map((item) => {
                  return <option key={item.id}>{item.name}</option>;
                })}
              </datalist>

              <Button className="mx-auto d-block" onClick={addCourse}>
                Create
              </Button>
            </Card.Body>
          </Form>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddCourse;
