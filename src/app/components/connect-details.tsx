import React from 'react';

type IProps = {
  link: string;
};

const ConnectDetails = ({ link }: IProps): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="tariff-card__connect-btns-details"
    >
      Подробнее
    </a>
  );
};

export default ConnectDetails;
