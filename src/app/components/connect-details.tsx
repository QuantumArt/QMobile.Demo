import React, { FC } from 'react';

type IProps = {
  link: string;
};

const ConnectDetails: FC<IProps> = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='tariff-card-connect-btns__details'>
      Подробнее
    </a>
  );
};

export default ConnectDetails;
