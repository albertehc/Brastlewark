import React from "react";
import { Button } from "react-bootstrap";
import {
  CardImgTop,
  CardContainer,
  CardFooter,
  IconsContainer,
  CardName,
  CardBody,
} from "./styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGnomeRequest } from "./../../containers/Gnomes/gnomes.actions";
import Male from "./../../assets/icons/gender/male.png";
import Female from "./../../assets/icons/gender/female.png";
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
    <CardContainer>
      <CardImgTop src={thumbnail} />
      <CardBody>
        <CardName className="text-center align-middle">{name}</CardName>
        <IconsContainer>
          {gender === "Male" ? (
            <img src={Male} alt="Male" />
          ) : (
            <img src={Female} alt="Female" />
          )}
          <Hair size="50" color={hair_color} />
        </IconsContainer>
      </CardBody>
      <CardFooter>
        <Button
          className="btn btn-primary btn-block"
          onClick={() => getInfo(id)}
          variant="info"
        >
          See More..
        </Button>
      </CardFooter>
    </CardContainer>
  );
};
