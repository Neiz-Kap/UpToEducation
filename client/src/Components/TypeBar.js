import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { course } = useContext(Context);
  return (
    <ListGroup horizontal className="occupation-bar">
      <ListGroup.Item
        className="py-2 px-1 auth__title"
        style={{ cursor: "pointer" }}
        active={Object.entries(course.setSelectedOccupation).length === 0}
        onClick={() => course.setSelectedOccupation({})}
        key={"unical"}
      >
        Все профессии
      </ListGroup.Item>

      {course.occupations.map((occupation) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={occupation.id === course.selectedOccupation.id}
          onClick={() => course.setSelectedOccupation(occupation)}
          key={occupation.id}
        >
          {occupation.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
