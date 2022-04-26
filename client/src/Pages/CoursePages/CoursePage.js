import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../../HTTP/coursesAPI";
import NotFound from "../NotFound";

const CoursePage = () => {
  const [course, setCourse] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setCourse(data));
  }, []);

  // console.log(`card: ${JSON.stringify(course, null, 2)}`);
  // console.log(`card.info.length == 0: ${JSON.stringify(course.info.length == 0, null, 2)}`);

  return (
    <>
      {course.info.length !== 0 ? (
        <React.Fragment>
          <Row>
            <Col md={4}>
              {/* <Image width={300} height={300} src={process.env.REACT_APP_API_URL + course.img} /> */}
            </Col>
            <Col md={4}>
              {/* <Row className="d-flex flex-column align-items-center">
                        <h2>{course.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {course.rating}
                        </div>
                    </Row> */}
            </Col>
            <Col md={4}>
              <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style={{
                  width: 300,
                  height: 300,
                  fontSize: 32,
                  border: "5px solid lightgray",
                }}
              >
                {/* <h3>От: {course.price} руб.</h3> */}
                <Button variant={"outline-dark"}>Добавить в корзину</Button>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-column m-3">
            <h1>Характеристики</h1>
            {/* {course.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )} */}
          </Row>
        </React.Fragment>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default CoursePage;
