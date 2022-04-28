import React, { FC } from 'react';
import MailIcon from '../../assets/icons/Mail_white.svg';
import TelegramIcon from '../../assets/icons/Telegram_white.svg';
import VKIcon from '../../assets/icons/VK_white.svg';

const SocialLogos: FC = () => {
  return (
    <div className="footer__social-icons">
      <img src={MailIcon} alt="mail icon" />
      <img src={VKIcon} alt="vk icon" />
      <img src={TelegramIcon} alt="telegram icon" />
    </div>
  );
};

export default SocialLogos;
