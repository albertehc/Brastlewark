import styled from "styled-components";
import { Image, Card } from "react-bootstrap";

export const ImageCircle = styled(Image)`
  object-fit: cover;
  height: 9rem;
  width: 9rem;
  padding: 0;
  border: 5px solid
    ${(props) => {
      if (props.gender === "Male") return "#E5283E";
      else return "#BAFFEE";
    }};
  @media (min-width: 576px) {
    height: 9rem;
    width: 9rem;
  }
  @media (min-width: 768px) {
    height: 9rem;
    width: 9rem;
  }
  @media (min-width: 992px) {
    height: 8.5rem;
    width: 8.5rem;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const CardContainer = styled(Card)`
  width: 10rem;
  height: 15rem;
  display: flex;
  margin: 0.5rem auto;
`;

export const CardFooter = styled(Card.Footer)`
  height: 33%;
  color: black;
  font-size: 1rem;
  text-align: center;
`;
