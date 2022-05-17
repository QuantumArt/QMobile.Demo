import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {
  link: string;
};

const ConnectDetails = ({ link }: IProps): JSX.Element => (
  <Link
    to={link}
    rel="noopener noreferrer"
    className="tariff-card__connect-btns-details"
  >
    Подробнее
  </Link>
);

export default ConnectDetails;
