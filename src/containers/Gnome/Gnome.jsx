import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Card } from "../../components";
import Spinner from "./../../components/Spinner";

export default () => {
  const history = useHistory();
  const { loading, gnome, gnomes } = useSelector((state) => state.gnomes);
  const { friends } = gnome;
  const friendList = friends?.map((friend) => {
    const id = gnomes.findIndex((e) => e.name === friend);
    return {
      id,
      name: friend,
      thumbnail: gnomes[id].thumbnail,
      gender: gnomes[id].gender,
    };
  });
  if (Object.keys(gnome).length === 0) history.push("/");
  if (loading) return <Spinner />;
  return (
    <Container>
      <Card friendList={friendList} />
    </Container>
  );
};
