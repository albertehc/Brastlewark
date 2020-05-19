import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Icons from "./../../assets/icons/professions";
import { getGnomesSearchRequest } from "./../../containers/Gnomes/gnomes.actions";
import * as S from "./styles";
import { Friend } from "./../";
import Hair from "./../Hair";

export default ({ friendList }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, gnome } = useSelector((state) => state.gnomes);
  const {
    name,
    thumbnail,
    age,
    gender,
    weight,
    height,
    hair_color,
    professions,
  } = gnome;

  if (loading) return <div>Loading...</div>;
  const handleProfession = (profession) => {
    dispatch(getGnomesSearchRequest(profession));
    history.push("/");
  };
  return (
    <>
      <Row>
        <S.CardContainer>
          <S.TopContainer>
            <S.ImgContainer>
              <S.CardImgTop variant="top" src={thumbnail} />
              <S.ImgAvatar alt={name} src={thumbnail} />
            </S.ImgContainer>
            <S.CardTitle className="m-3 rounded w-75 mt-2 d-flex flex-column align-items-center justify-content-center">
              <div className="my-3 h2">{name}</div>
              <div className="my-3">
                <Hair size="200" gender={gender} color={hair_color} />
              </div>
              <div className="my-3">
                <p>
                  <span>{`${age} years`}</span>
                  <span>{` | ${weight.toFixed(0)} kg`}</span>
                  <span>{` | ${height.toFixed(0)} cm`}</span>
                </p>
              </div>
            </S.CardTitle>
          </S.TopContainer>
          <Card.Body className="p-3">
            <S.Professions className="d-flex flex-column align-items-center rounded">
              {professions?.length ? (
                <>
                  <p className="mt-2">Professions</p>
                  <div className="d-flex justify-content-around flex-wrap mb-2">
                    {professions.map((e) => (
                      <div
                        key={e}
                        className="d-flex flex-column align-items-center"
                      >
                        <S.Profession
                          className="m-2 btn"
                          alt={e}
                          onClick={() => handleProfession(e)}
                          src={Icons[e.trim().split(" ")[0]]}
                        />
                        <span>{e}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="mt-2">No professions yet</p>
              )}
            </S.Professions>
          </Card.Body>
        </S.CardContainer>
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
                  gender={e.gender}
                />
              ))}
            </Row>
          </div>
        )}
      </Row>
    </>
  );
};
