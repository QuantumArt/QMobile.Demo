import React from 'react';
import { Link } from 'react-router-dom';

const MakeTariffLink = (): JSX.Element => {
  return (
    <Link
      to="/tariffs/tariffconstructor"
      className="tariffs-page-content__make-tariff-link"
    >
      Соберите свой тариф
    </Link>
  );
};

export default MakeTariffLink;
