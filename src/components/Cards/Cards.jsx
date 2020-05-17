import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardImgTop, CardContainer, CardFooter } from "./styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGnomeRequest } from "./../../containers/Gnomes/gnomes.actions";

export default ({ gnomes }) => {
  const { id, name, thumbnail } = gnomes;
  const history = useHistory();
  const dispatch = useDispatch();

  const getInfo = (id) => {
    dispatch(getGnomeRequest(id));
    history.push(`/gnome/${id}`);
  };
  return (
    <CardContainer>
      <CardImgTop src={thumbnail} />
      <Card.Body>
        <Card.Title className='text-center align-middle'>{name}</Card.Title>
      </Card.Body>
      <CardFooter>
        <Button className='btn btn-primary btn-block' onClick={() => getInfo(id)} variant="info">
          See More..
        </Button>
      </CardFooter>
    </CardContainer>
  );
};
