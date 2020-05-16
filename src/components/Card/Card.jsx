import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Row } from "react-bootstrap";
import Icons from "./../../assets/icons/professions";
import { getGnomesSearchRequest } from "./../../containers/Gnomes/gnomes.actions";
import { CardContainer, CardImgTop } from "./styles";
import { Friend } from "./../";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
  const handleProfession = (profession) => {
    dispatch(getGnomesSearchRequest(profession));
    history.push('/');
  };
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
                {professions &&
                  professions.map((e) => (
                    <img
                      className="m-2"
                      alt={e}
                      key={e}
                      onClick={() => handleProfession(e)}
                      src={Icons[e.trim().split(" ")[0]]}
                    />
                  ))}
              </Card.Text>
            </Card.Body>
            {friendList.length !== 0 && (
              <Card.Footer className="text-center">
                Friends
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
              </Card.Footer>
            )}
          </CardContainer>
        </Row>
      </Container>
    </>
  );
};
