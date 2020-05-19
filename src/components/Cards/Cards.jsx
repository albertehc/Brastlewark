import React from "react";
import { Button } from "react-bootstrap";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGnomeRequest } from "./../../containers/Gnomes/gnomes.actions";
import Hair from "./../Hair";

export default ({ gnomes }) => {
  const { id, name, thumbnail, gender, hair_color } = gnomes;
  const history = useHistory();
  const dispatch = useDispatch();

  const getInfo = (id) => {
    dispatch(getGnomeRequest(id));
    history.push(`/gnome/${id}`);
  };
  return (
    <S.CardContainer>
      <S.CardImgTop src={thumbnail} />
      <S.CardBody>
        <S.CardName className="text-center align-middle">{name}</S.CardName>
        <S.IconsContainer>
          <Hair gender={gender} size="75" color={hair_color} />
        </S.IconsContainer>
      </S.CardBody>
      <S.CardFooter>
        <Button
          className="btn btn-block border-0"
          onClick={() => getInfo(id)}
          variant="outline-secondary"
        >
          See More..
        </Button>
      </S.CardFooter>
    </S.CardContainer>
  );
};
