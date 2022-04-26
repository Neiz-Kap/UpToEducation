import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DeviceList from "../Components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../HTTP/coursesAPI";
import Pages from "../Components/Pages";

const Shop = observer(() => {
  const { course } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => course.setOccupations(data));
    fetchBrands().then((data) => course.setAuthors(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      course.setCourseData(data.rows);
      course.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      course.selectedOccupation.id,
      course.selectedAuthor.id,
      course.page,
      2
    ).then((data) => {
      course.setCourseData(data.rows);
      course.setTotalCount(data.count);
    });
  }, [course.page, course.selectedOccupation, course.selectedAuthor]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
