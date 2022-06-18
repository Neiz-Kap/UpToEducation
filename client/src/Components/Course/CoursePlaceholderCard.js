import React from "react";
import { Col, Card, Placeholder } from "react-bootstrap";

const CoursePlaceholderCard = () => {
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card className="content-card">
        <Card.Header className="content-card-header">
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Header>

        <Card.Img
          style={{ height: 185 }}
          variant="top"
          src="holder.js/100px180"
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow" className="mb-2">
            <Placeholder xs={4} /> <Placeholder xs={5} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          {/* <Placeholder.Button variant="primary" xs={6} /> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoursePlaceholderCard;
