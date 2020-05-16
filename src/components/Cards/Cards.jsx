import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardImgTop } from "./styles";
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
    <Card>
      <CardImgTop variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={() => getInfo(id)} variant="primary">
          See More..
        </Button>
      </Card.Body>
    </Card>
  );
};
