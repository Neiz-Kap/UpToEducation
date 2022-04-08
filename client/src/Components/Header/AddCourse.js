import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import "./Header.css";

import { Context } from "../../index.js";
import { CATALOG_ROUTE } from "../../Utils/consts.js"
import { createCourse, fetchCourses } from "../../HTTP/coursesAPI.js"

import { Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';

const AddCourse = ({ show, onHide }) => {
  const { card } = useContext(Context);
  const history = useHistory();

  const [author, setAuthor] = useState('');
  const [colorCard, setColorCard] = useState('#192534');
  const [name, setName] = useState('');
  const [urlCourse, setUrlCourse] = useState('');
  const [description, setDescription] = useState('');

  const [image, setImage] = useState(null);
  const imageRef = React.useRef(null);

  const useDisplayImage = () => {
    const [result, setResult] = React.useState("");
    const uploader = (e) => {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });
      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  const addCourse = () => {
    const formData = new FormData();
    formData.append('author', author);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('course_url', urlCourse);
    formData.append('fone', colorCard);
    formData.append('image', image);

    createCourse(formData).then((data) => {
      fetchCourses().then(data => card.setCardData(data.rows));
      history.push(CATALOG_ROUTE);
      onHide();
    }
    )
  }

  return (
    <Modal show={show} onHide={onHide} className="card__modal" size="lg" centered>
      <Modal.Body>
        <Card className="content-card" style={{ backgroundColor: `${colorCard}` }}>
          <Form method="post">
            <Card.Header className="content-card-header">
              <Form.Label className="font-weight-bold text-center">Create course</Form.Label>
              <Row>
                <Col className="pl-2">
                  <Form.Control className="card-form" type="text" placeholder="Enter author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control className="ml-auto p-0" type="color" id="favcolor" name="favcolor"
                    onChange={e => setColorCard(e.target.value)}
                    value={`${colorCard}`}
                  />

                </Col>
              </Row>

              <Form.Group className="card__group">
                <Form.Control className="card-form p-0 mt-2" id="image" type="file" name="image" label="Paste or select image" accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    uploader(e);
                  }}
                />
              </Form.Group>
            </Card.Header>


            {result && <Card.Img ref={imageRef} src={result} alt="Image of course" />}
            <Card.Body>
              <Card.Title className="mb-2">
                <Form.Control className="card-form" type="name" placeholder="Enter name of course"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Card.Title>

              <Row>
                <Col>
                  <Card.Text className="pl-2 my-2">Link:</Card.Text>
                </Col>
                <Col>
                  <Form.Control className="card-form" type="text" placeholder="Enter url" name="url"
                    value={urlCourse}
                    onChange={e => setUrlCourse(e.target.value)}
                  />
                </Col>
              </Row>
              <Form.Control as="textarea"
                className="card-form"
                placeholder="Enter description" name="description"
                style={{ minHeight: 120 }}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />

              <Button className="mx-auto d-block"
                onClick={addCourse}
              >Create</Button>
            </Card.Body>
          </Form>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

export default AddCourse;
