import React, { FC } from 'react';
import FooterInfo from '../components/footer-info';
import Navbar from '../components/navbar';

const Footer: FC = () => {
  return (
    <div className="footer__wrapper">
      <footer className="footer">
        <Navbar containerName="footer__nav" />
        <div className="footer__separator" />
        <FooterInfo />
      </footer>
    </div>
  );
};

export default Footer;
