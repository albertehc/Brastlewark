import styled from "styled-components";
import { Card, CardImg } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  /* object-fit: cover; */
  height: 50%;
`;
export const CardFooter = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;
export const CardContainer = styled(Card)`
  height: 25rem;
  margin: 0;
  /* width: 90%;
  
  margin: 0.5rem auto;
  @media (min-width: 576px) {
    width: 18rem;
    height: 30rem;
  }
  @media (min-width: 768px) {
    width: 18rem;
    height: 27vw;
  }
  @media (min-width: 992px) {
    width: 18rem;
    height: 27vw;
  } */
`;
