import React from "react";
import PaginationStyle from './styles';
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
    <PaginationStyle>
      <PaginationStyle.First onClick={() => changePage(1)} />
      <PaginationStyle.Prev onClick={() => changePage(actualPage - 1)} />
      {actualPage === totalPages && totalPages > 2 && (
        <PaginationStyle.Item onClick={() => changePage(actualPage - 2)}>
          {actualPage - 2}
        </PaginationStyle.Item>
      )}
      {actualPage > 1 && (
        <PaginationStyle.Item onClick={() => changePage(actualPage - 1)}>
          {actualPage - 1}
        </PaginationStyle.Item>
      )}
      <PaginationStyle.Item active>{actualPage}</PaginationStyle.Item>
      {actualPage < totalPages && (
        <PaginationStyle.Item onClick={() => changePage(actualPage + 1)}>
          {actualPage + 1}
        </PaginationStyle.Item>
      )}
      {actualPage === 1 && actualGnomes.length > 0 && totalPages > 2 && (
        <PaginationStyle.Item onClick={() => changePage(actualPage + 2)}>
          {actualPage + 2}
        </PaginationStyle.Item>
      )}
      <PaginationStyle.Next onClick={() => changePage(actualPage + 1)} />
      <PaginationStyle.Last onClick={() => changePage(totalPages)} />
    </PaginationStyle>
  );
};
