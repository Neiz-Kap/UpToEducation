import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import star from '../assets/star.png'
import { useHistory } from "react-router-dom"
import { CARD_ROUTE } from "../Utils/consts";

const DeviceItem = ({ card }) => {
  const history = useHistory()
  return (
    <Col md={3} className={"mt-3"} onClick={() => history.push(CARD_ROUTE + '/' + card.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + card.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
          </div>
        </div>
        <div>{card.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
