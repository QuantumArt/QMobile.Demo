import React from 'react';
import MailIcon from '../../assets/icons/Mail_white.svg';
import TelegramIcon from '../../assets/icons/Telegram_white.svg';
import VKIcon from '../../assets/icons/VK_white.svg';

const SocialLogos = (): JSX.Element => (
  <div className="footer__social-icons">
    <a href="https://outlook.com" target="_blank" rel="noopener noreferrer">
      <img src={MailIcon} alt="mail icon" />
    </a>
    <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
      <img src={VKIcon} alt="vk icon" />
    </a>
    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
      <img src={TelegramIcon} alt="telegram icon" />
    </a>
  </div>
);

export default SocialLogos;
