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
      className="tariff-card-connect-btns__details"
    >
      Подробнее
    </a>
  );
};

export default ConnectDetails;
