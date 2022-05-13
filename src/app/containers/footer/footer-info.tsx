import React from 'react';
import SocialLogos from '../../components/social-logos';

const FooterInfo = (): JSX.Element => {
  return (
    <div className="footer__info container">
      <p className="footer__rights">Все права защищены © Quantum Art</p>
      <SocialLogos />
    </div>
  );
};

export default FooterInfo;
