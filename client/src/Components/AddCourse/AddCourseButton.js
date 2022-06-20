import React, { useState } from "react";

import addCourseButton from "../../Assets/admin/addCourseButton.svg";
import AddCourse from "./AddCourse";
import { Card, Col } from "react-bootstrap";

const AddCourseButton = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card
        className="content-card"
        style={{ backgroundColor: "transparent", minHeight: 400 }}
        onClick={() => setLgShow(true)}
      >
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={addCourseButton}
            alt="addCourse"
            style={{ maxWidth: 150 }}
          />
          <Card.Title className="mt-2">Добавить</Card.Title>
        </Card.Body>
      </Card>
      <AddCourse show={lgShow} onHide={() => setLgShow(false)} />
    </Col>
  );
};

export default AddCourseButton;
