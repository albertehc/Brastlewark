import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Row } from "react-bootstrap";
import Icons from "./../../assets/icons/professions";
import { getGnomesSearchRequest } from "./../../containers/Gnomes/gnomes.actions";
import {
  CardContainer,
  CardImgTop,
  ImgAvatar,
  ImgContainer,
  Profession,
} from "./styles";
import Male from "./../../assets/icons/gender/male.png";
import Female from "./../../assets/icons/gender/female.png";
import { Friend } from "./../";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, gnome, gnomes, average } = useSelector(
    (state) => state.gnomes
  );
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
    history.push("/");
  };

  return (
    <>
      <Container>
        <Row>
          <Button onClick={() => history.push("/")}>Back</Button>
        </Row>
        <Row>
          <CardContainer>
            <ImgContainer>
              <CardImgTop variant="top" src={thumbnail} />
              <ImgAvatar alt={name} src={thumbnail} />
            </ImgContainer>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center'>{name}</Card.Title>
              <Card.Text>
                {height / weight > average ? (
                  <img src={Male} alt="Male" />
                ) : (
                  <img src={Female} alt="Female" />
                )}
                {age}
                {weight}
                {height}
                {hair_color}
                <span className="d-flex justify-content-center">
                  {professions &&
                    professions.map((e) => (
                      <Profession
                        className="m-2 btn"
                        alt={e}
                        key={e}
                        onClick={() => handleProfession(e)}
                        src={Icons[e.trim().split(" ")[0]]}
                      />
                    ))}
                </span>
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
