import styled from "styled-components";
import { Card, CardImg } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  object-fit: cover;
  @media (min-width: 576px) {
    height: 19vw;
  }
  @media (min-width: 768px) {
    height: 18vw;
  }
  @media (min-width: 992px) {
    height: 16vw;
  }
`;

export const CardContainer = styled(Card)`
  width: 18rem;
  height: 25vw;
  margin-bottom: 0.5rem;
  @media (min-width: 576px) {
    font-size:5rem;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
  @media (min-width: 992px) {
    font-size: 50rem;
  }
`;
