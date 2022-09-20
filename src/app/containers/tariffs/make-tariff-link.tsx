import React from 'react';
import { Link } from 'react-router-dom';

const MakeTariffLink = (): JSX.Element => (
  <Link to="/notfound" className="tariffs-page-content__make-tariff-link">
    Соберите свой тариф
  </Link>
);

export default MakeTariffLink;
