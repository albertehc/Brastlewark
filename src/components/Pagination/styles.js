import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

export default styled(Pagination)`
  .page-link {
    border-color: #fff;
    background-color: #fff;
    color: #4b4b4b;
    outline: none;
    box-shadow: none;
    &:hover {
      color: #fff;
      background: #727171;
      border-color: #727171;
    }
    &:active {
      color: #fff;
      background: #727171;
      border-color: #727171;
    }
  }
  .page-item.active .page-link {
    background: #4b4b4b;
    border-color: #4b4b4b;
    &:hover {
      color: #fff;
      background: #727171;
      border-color: #727171;
    }
  }
`;
