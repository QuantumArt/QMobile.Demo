import React from 'react';
import FooterInfo from './footer-info';
import Navbar from '../navbar';
import { footerNavRoutes } from '../../constants/navigation-routes';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <Navbar containerName="footer__nav" routesList={footerNavRoutes} />
      <div className="footer__separator" />
      <FooterInfo />
    </footer>
  );
};

export default Footer;
