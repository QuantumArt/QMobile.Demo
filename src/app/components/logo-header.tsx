import React, { FC } from 'react';
import Logo from '../../assets/images/HeaderLogo.svg';

const LogoHeader: FC = () => {
  return (
    <div className="header__logo-container container">
      <img src={Logo} alt="" />
    </div>
  );
};

export default LogoHeader;
