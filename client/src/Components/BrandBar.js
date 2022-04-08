import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row, ListGroup } from "react-bootstrap";

const BrandBar = observer(() => {
  const { card } = useContext(Context)

  return (
    <ListGroup horizontal
      className="author-bar"
    >
      <ListGroup.Item
        className="py-2 px-1 auth__title"
        style={{ cursor: 'pointer' }}
        active={Object.entries(card.selectedAuthor).length === 0}
        onClick={() => card.setSelectedAuthor({})}
        key={'unical'}
      >
        Все преподаватели
      </ListGroup.Item>

      {card.authors.map(author =>
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={author.id === card.selectedAuthor.id}
          onClick={() => card.setSelectedAuthor(author)}
          key={author.id}
        >
          {author.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  );
});

export default BrandBar;
