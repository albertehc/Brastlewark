import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGnomeRequest } from "./../../containers/Gnomes/gnomes.actions";
import { ImageCircle, CardContainer, CardFooter } from "./styles";

export default ({ id, name, thumbnail, gender }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getInfo = (id) => {
    dispatch(getGnomeRequest(id));
    history.push(`/gnome/${id}`);
  };
  return (
    <Col>
      <CardContainer>
        <Card.Title className="m-auto">
          <ImageCircle
            src={thumbnail}
            onClick={() => getInfo(id)}
            className="rounded-circle btn"
            gender={gender}
          />
        </Card.Title>
        <CardFooter>{name}</CardFooter>
      </CardContainer>
    </Col>
  );
};
