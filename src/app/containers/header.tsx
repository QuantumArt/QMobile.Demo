import React, { FC } from 'react';
import LogoHeader from '../components/logo-header';
import Navbar from '../components/navbar';

const Header: FC = () => {
  return (
    <header className="header">
      <LogoHeader />
      <div className="header__nav-wrapper">
        <Navbar containerName="header__nav" />
      </div>
    </header>
  );
};

export default Header;
