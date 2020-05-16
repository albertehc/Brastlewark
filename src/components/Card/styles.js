import styled from "styled-components";
import { CardImg, Card } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  width: auto;
  height: 36vw;
  /* object-fit: cover; */
  @media (min-width: 576px) {
    height: 32vw;
  }
  @media (min-width: 768px) {
    height: 29vw;
  }
  @media (min-width: 992px) {
    height: 27vw;
  }
`;

export const CardContainer = styled(Card)`
  width: 90%;
  height: 90%;
`;