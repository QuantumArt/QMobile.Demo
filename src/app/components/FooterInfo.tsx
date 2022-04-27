import React,{ FC } from 'react';
import SocialLogos from './SocialLogos';


const FooterInfo: FC = () => {

    return (
        <div className='footer__info container'>
          <p className='footer__rights'>Все права защищены © Quantum Art</p>
          <SocialLogos />
        </div>
    )
}

export default FooterInfo;
