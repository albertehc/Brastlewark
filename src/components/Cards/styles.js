import styled from "styled-components";
import { Card, CardImg } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  height: 50%;
  @media (max-width: 576px) {
    width: auto;
  }
  
`;
export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
`;
export const CardContainer = styled(Card)`
  height: 20rem;
  margin: 0;
`;
