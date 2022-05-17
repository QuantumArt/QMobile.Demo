import React from 'react';
import LogoHeader from '../components/logo-header';
import Navbar from './navbar';
import { headerNavRoutes } from '../constants/navigation-routes';

const Header = (): JSX.Element => (
  <header className="header">
    <LogoHeader />
    <div className="header__nav-wrapper">
      <Navbar containerName="header__nav" routesList={headerNavRoutes} />
    </div>
  </header>
);

export default Header;
