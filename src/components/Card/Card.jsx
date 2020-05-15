import React from "react";
import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Card,Button} from "react-bootstrap";
import { CardContainer, CardImgTop } from "./styles";

export default () => {
  const history = useHistory();
  const { gnome } = useSelector(state => state.gnomes);
  const {
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends,
  } = gnome;
  console.log(name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends)
  return (
    <>
    <Button onClick={()=>history.goBack()}>Back</Button>
    <Card>
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
      </Card.Body>
      </Card>
      </>
  );
};
