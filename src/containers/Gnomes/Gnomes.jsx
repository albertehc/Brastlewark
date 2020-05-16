import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import { getGnomesRequest,getGnomesSearchRequest } from "./gnomes.actions";
import { Pagination, Cards } from "./../../components";
import { ColCenter } from './styles'

export default () => {
  const dispatch = useDispatch();
  const { loading, actualGnomes, postPerPage, actualPage } = useSelector(
    (state) => state.gnomes
  );
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
        <ColCenter>
          <Pagination />
        </ColCenter>
      </Row>
      <Row>
        <ColCenter>
          <input onChange={((e) => dispatch(getGnomesSearchRequest(e.target.value)))}></input>
        </ColCenter>
        <ColCenter>
         {actualGnomes?.length} Results
        </ColCenter>
      </Row>
      <Row>
        <Col>
          <CardColumns>
            {currentGnomes?.map((e) => (
              <Cards key={e.id} gnomes={e} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
};
