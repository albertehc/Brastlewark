import styled from "styled-components";
import { CardImg, Card } from "react-bootstrap";

export const CardImgTop = styled(CardImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  @media (min-width: 576px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 768px) {
    height: 100%;
    width: 22rem;
  }
  @media (min-width: 992px) {
    height: 100%;
    width: 20rem;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  @media (min-width: 576px) {
    height: 18rem;
    width: 100%;
  }
  @media (min-width: 768px) {
    margin-left: 1rem;
    height: 25rem;
    width: 22rem;
  }
  @media (min-width: 992px) {
    height: 25rem;
    width: 20rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export const CardContainer = styled(Card)`
  width: 90%;
  height: 90%;
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
`;

export const Professions = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.06);
`;

export const Profession = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

export const CardTitle = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.06);
`;

export const ImgAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  border: 3px white solid;
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 576px) {
    width: 17rem;
    height: 17rem;
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
