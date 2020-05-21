import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getGnomesRequest } from "./../../redux/actions/gnomes.actions";
import { Pagination, Cards } from "./../../components";
import * as S from "./styles";
import Spinner from "./../../components/Spinner";

export default () => {
  const dispatch = useDispatch();
  const {
    loading,
    actualGnomes,
    gnomes,
    postPerPage,
    actualPage,
  } = useSelector((state) => state.gnomes);
  React.useEffect(() => {
    if (!gnomes.length) {
      dispatch(getGnomesRequest());
    }
    //eslint-disable-next-line
  }, []);
  if (loading) return <Spinner />;
  const indexLastPost = actualPage * postPerPage;
  const currentGnomes = actualGnomes?.slice(
    indexLastPost - postPerPage,
    indexLastPost
  );
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <S.CardColumn>
            {currentGnomes?.map((e) => (
              <Cards key={e.id} gnomes={e} />
            ))}
          </S.CardColumn>
        </Col>
      </Row>
      <Row>
        <S.ColCenter>
          <Pagination />
        </S.ColCenter>
      </Row>
    </Container>
  );
};
