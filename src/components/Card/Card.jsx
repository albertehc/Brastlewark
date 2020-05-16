import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button, Container, Row } from "react-bootstrap";
import { CardContainer, CardImgTop } from "./styles";
import { Friend } from "./../";

export default () => {
  const history = useHistory();
  const { loading, gnome, gnomes } = useSelector((state) => state.gnomes);
  const {
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends,
  } = gnome;

  if (loading) return <div>Loading...</div>;
  const friendList = friends?.map((friend) => {
    const id = gnomes.findIndex((e) => e.name === friend);
    return {
      id,
      name: friend,
      thumbnail: gnomes[id].thumbnail,
    };
  });
  return (
    <>
      <Container>
        <Row>
          <Button onClick={() => history.push("/")}>Back</Button>
        </Row>
        <Row>
          <CardContainer>
            <CardImgTop variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {age}
                {weight}
                {height}
                {hair_color}
                {professions}
              </Card.Text>
            </Card.Body>
            {friendList.length !== 0 && <Card.Footer className='text-center'>
              Friends
              <Container>
                <Row>
                  {friendList.map((e) => (
                      <Friend
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        thumbnail={e.thumbnail}
                      />
                    ))}
                </Row>
              </Container>
            </Card.Footer>}
          </CardContainer>
        </Row>
      </Container>
    </>
  );
};
