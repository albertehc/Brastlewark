import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import { getGnomesRequest } from "./gnomes.actions";
import { Pagination, Cards } from "./../../components";
import { ColCenter, CardColumn } from "./styles";

export default () => {
  const dispatch = useDispatch();
  const {
    loading,
    actualGnomes,
    postPerPage,
    actualPage,
  } = useSelector((state) => state.gnomes);
  React.useEffect(() => {
    if (!actualGnomes.length) {
      dispatch(getGnomesRequest());
    }
    //eslint-disable-next-line
  }, []);
  if (loading) return <div>Loading...</div>;
  const indexLastPost = actualPage * postPerPage;
  const currentGnomes = actualGnomes?.slice(
    indexLastPost - postPerPage,
    indexLastPost
  );
  return (
    <Container>
      <Row>
        <Col>
          <CardColumn>
            {currentGnomes?.map((e) => (
              <Cards key={e.id} gnomes={e} />
            ))}
          </CardColumn>
        </Col>
      </Row>
      <Row>
        <ColCenter>
          <Pagination />
        </ColCenter>
      </Row>
    </Container>
  );
};
