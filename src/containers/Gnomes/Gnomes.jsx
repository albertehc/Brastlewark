import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGnomesStart,
  getGnomesSuccess,
  getGnomesFailure,
} from "./gnomesActions";
import getGnomes from "./../../utils/api";
import Card from './../../components/Card/Card'

export default () => {
  const dispatch = useDispatch();
  const { loading, gnomes } = useSelector((gnomes) => gnomes.gnomes);
  React.useEffect(() => {
    getGnomesStart();
    getGnomes()
      .then(({ Brastlewark }) =>  dispatch(getGnomesSuccess( Brastlewark )))
      .catch(() => dispatch(getGnomesFailure("Can't load data")));
    //eslint-disable-next-line
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {gnomes?.map((e) => (
        <Card key={e.id} gnomes={e}/>
      ))}
    </div>
  );
};
