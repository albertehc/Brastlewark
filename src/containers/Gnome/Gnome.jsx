import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card";

export default () => {
  const { loading } = useSelector(state => state.gnomes);
  if (loading) return <div>Loading...</div>;
  
  return (
    <Container>
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
    </Container>
  );
};
