import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Card } from "../../components";
import Spinner from './../../components/Spinner';

export default () => {
  const history = useHistory();
  const { loading,gnome } = useSelector(state => state.gnomes);
  
  if (Object.keys(gnome).length === 0) history.push('/');
  if (loading) return <Spinner />;
  return (
    <Container>
          <Card />
    </Container>
  );
};
