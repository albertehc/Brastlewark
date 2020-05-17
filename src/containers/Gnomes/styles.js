import styled from "styled-components";
import { Col, CardColumns } from "react-bootstrap";

export const ColCenter = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const CardColumn = styled(CardColumns)`
  -webkit-column-break-inside: avoid;
  @media (min-width: 576px) {
    column-count: 2;
  }
  @media (min-width: 768px) {
    column-count: 2;
  }
  @media (min-width: 992px) {
    column-count: 5;
  }
  @media (min-width: 1200px) {
    column-count: 5;
  }
`;
