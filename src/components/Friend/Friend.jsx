import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGnomeRequest } from "./../../redux/actions/gnomes.actions";
import * as S from "./styles";

export default ({ id, name, thumbnail, gender }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getInfo = (id) => {
    dispatch(getGnomeRequest(id));
    history.push(`/gnome/${id}`);
  };
  return (
    <Col>
      <S.CardContainer>
        <Card.Title className="m-auto">
          <S.ImageCircle
            src={thumbnail}
            onClick={() => getInfo(id)}
            className="rounded-circle btn"
            gender={gender}
          />
        </Card.Title>
        <S.CardFooter>{name}</S.CardFooter>
      </S.CardContainer>
    </Col>
  );
};
