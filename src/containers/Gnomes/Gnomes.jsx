import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import {
  getGnomesRequest
} from "./gnomes.actions";

import Card from "../../components/Cards/Cards";

export default () => {
  const dispatch = useDispatch();
  const { loading, gnomes } = useSelector(state => state.gnomes);
  React.useEffect(() => {
    if (!gnomes.length) {
      dispatch(getGnomesRequest());
    }
    //eslint-disable-next-line
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <Container>
      <Row>
        <Col>
          <CardColumns>
            {gnomes?.map((e) => (
              <Card key={e.id} gnomes={e} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
};
