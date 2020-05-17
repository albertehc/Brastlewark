import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getGnomesPageRequest } from "./../../containers/Gnomes/gnomes.actions";

export default () => {
  const { actualPage, totalPages, actualGnomes } = useSelector(
    (state) => state.gnomes
  );
  const dispatch = useDispatch();
  const changePage = (page) => {
    if (page !== 0 && page !== actualPage && page <= totalPages) {
      dispatch(getGnomesPageRequest(page));
    }
  };
  return (
    <Pagination>
      <Pagination.First onClick={() => changePage(1)} />
      <Pagination.Prev onClick={() => changePage(actualPage - 1)} />
      {actualPage === totalPages && totalPages > 2 && (
        <Pagination.Item onClick={() => changePage(actualPage - 2)}>
          {actualPage - 2}
        </Pagination.Item>
      )}
      {actualPage > 1 && (
        <Pagination.Item onClick={() => changePage(actualPage - 1)}>
          {actualPage - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{actualPage}</Pagination.Item>
      {actualPage < totalPages && (
        <Pagination.Item onClick={() => changePage(actualPage + 1)}>
          {actualPage + 1}
        </Pagination.Item>
      )}
      {actualPage === 1 && actualGnomes.length > 0 && totalPages > 2 && (
        <Pagination.Item onClick={() => changePage(actualPage + 2)}>
          {actualPage + 2}
        </Pagination.Item>
      )}
      <Pagination.Next onClick={() => changePage(actualPage + 1)} />
      <Pagination.Last onClick={() => changePage(totalPages)} />
    </Pagination>
  );
};
