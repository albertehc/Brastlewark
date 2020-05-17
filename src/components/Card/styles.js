import styled from "styled-components";
import { CardImg, Card } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  width: 100%;
  height: 26rem;
  object-fit: cover;
  opacity: 0.3;
  @media (min-width: 576px) {
    height: 24rem;
  }
  @media (min-width: 768px) {
    height: 22rem;
  }
  @media (min-width: 992px) {
    height: 20rem;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const CardContainer = styled(Card)`
  width: 90%;
  height: 90%;
`;

export const Profession = styled.img`
  &:hover{
    opacity: 0.5;
  }
`;

export const ImgAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  border: 3px white solid;
  width: 20rem;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  @media (min-width: 576px) {
    width: 18rem;
    height: 18rem;
  }
  @media (min-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
  @media (min-width: 992px) {
    width: 14rem;
    height: 14rem;
  }
`;