import styled from "styled-components";
import { CardImg, Card } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  width: auto;
  @media (min-width: 576px) {
    height: 30vw;
  }
  @media (min-width: 768px) {
    height: 27vw;
  }
  @media (min-width: 992px) {
    height: 25vw;
  }
`;

export const CardContainer = styled(Card)`
  width: 90%;
  height: 90%;
`;