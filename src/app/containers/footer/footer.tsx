import React, { FC } from 'react';
import FooterInfo from './footer-info';
import Navbar from '../navbar';
import { footerNavRoutes } from '../../constants/navigation-routes';

const Footer: FC = () => {
  return (
    <div className="footer__wrapper">
      <footer className="footer">
        <Navbar containerName="footer__nav" routesList={footerNavRoutes}/>
        <div className="footer__separator" />
        <FooterInfo />
      </footer>
    </div>
  );
};

export default Footer;
