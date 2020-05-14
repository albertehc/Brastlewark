import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

export default ({ gnomes }) => {
  const {
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends,
  } = gnomes;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {age}
          {weight}
          {height}
          {hair_color}
          {professions}
          {friends}
        </Card.Text>
        <Button variant="primary">See More..</Button>
      </Card.Body>
    </Card>
  );
};
