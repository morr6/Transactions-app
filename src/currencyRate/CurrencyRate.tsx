import React, { useEffect } from "react";
import { Title, Rate } from "./CurrenctRate.s";
import { getPlnRate } from "utilities/api/RateApi";
import { toogleApiLoading } from "utilities/api/Actions";
import { setPlnRate } from "./Actions";

import { useSelector, useDispatch } from "react-redux";

interface Store {
  plnRate: number;
}

export const CurrencyRate: React.FC = () => {
  const dispatch = useDispatch();

  const plnRate = useSelector((store: Store) => store.plnRate);

  const setRateToStore = () => {
    dispatch(toogleApiLoading());

    getPlnRate.fetchApi().then((res: any) => {
      const rate = parseFloat(res.data.rates.PLN.toFixed(2));

      dispatch(setPlnRate(rate));
      dispatch(toogleApiLoading());
    });
  };

  useEffect(() => {
    setRateToStore();
  }, []);

  return (
    <>
      <Title>current PLN exchange rate</Title>
      <Rate>1€ = {plnRate} PLN</Rate>
    </>
  );
};
