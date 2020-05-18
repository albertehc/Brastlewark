import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Icons from "./../../assets/icons/professions";
import { getGnomesSearchRequest } from "./../../containers/Gnomes/gnomes.actions";
import {
  CardContainer,
  CardImgTop,
  ImgAvatar,
  ImgContainer,
  Profession,
  Professions,
  TopContainer
} from "./styles";
import { Friend } from "./../";
import Hair from "./../Hair";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, gnome, gnomes } = useSelector((state) => state.gnomes);
  const {
    name,
    thumbnail,
    age,
    gender,
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
      <Row>
        <CardContainer>
          <TopContainer>
            <ImgContainer>
              <CardImgTop variant="top" src={thumbnail} />
              <ImgAvatar alt={name} src={thumbnail} />
            </ImgContainer>
            <Card.Title className="m-5 border border-secondary rounded w-75 mt-2 d-flex flex-column align-items-center justify-content-center">
              <div className='my-3'>{name}</div>
              <div className='my-3'>
                <Hair size="200" gender={gender} color={hair_color} />
              </div>
              <div className='my-3'>
                <p>
                  <span>{`${age} years`}</span>
                
                   <span>{` | ${weight.toFixed(0)} kg`}</span> 
                
                  <span>{` | ${height.toFixed(0)} cm`}</span>
                </p>
              </div>
            </Card.Title>
          </TopContainer>
          <Card.Body>
            <Professions className="m-2 d-flex justify-content-around border border-info rounded">
              {professions &&
                professions.map((e) => (
                  <div key={e}>
                    <Profession
                      className="m-2 btn"
                      alt={e}
                      onClick={() => handleProfession(e)}
                      src={Icons[e.trim().split(" ")[0]]}
                    />
                  </div>
                ))}
            </Professions>
          </Card.Body>
        </CardContainer>
        {friendList.length !== 0 && (
          <div className="text-center text-white mt-3 h3">
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
          </div>
        )}
      </Row>
    </>
  );
};
