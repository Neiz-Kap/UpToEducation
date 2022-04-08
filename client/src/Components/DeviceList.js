import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { card } = useContext(Context)

  return (
    <Row className="d-flex">
      {card.cardData.map(card =>
        <DeviceItem key={card.id} device={card} />
      )}
    </Row>
  );
});

export default DeviceList;
