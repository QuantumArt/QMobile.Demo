import React, { FC } from 'react';
import cn from 'classnames';

import { Link, useLocation } from 'react-router-dom';

type NavbarProps = {
  containerName: string;
};

const Navbar: FC<NavbarProps> = ({ containerName }) => {
  const { pathname } = useLocation();

  const firstRoute = pathname.split('/').filter(el => el.length > 0)[0];

  const navItemStyles = (linkname: string): string => {
    return cn(`${containerName}-item`, {
      [`${containerName}-item--active`]: linkname === firstRoute,
    });
  };

  return (
    <ul
      className={`${containerName} ${
        containerName === 'footer__nav'
          ? 'container container--padding-top'
          : 'container'
      }`}
    >
      <li className={navItemStyles('tariffs')}>
        <Link to="/tariffs" className={`${containerName}-link`}>
          Тарифы
        </Link>
      </li>
      <li className={navItemStyles('services')}>
        <Link to="/services" className={`${containerName}-link`}>
          Услуги
        </Link>
      </li>
      <li className={navItemStyles('devices')}>
        <Link to="/devices" className={`${containerName}-link`}>
          Устройства
        </Link>
      </li>
      <li className={navItemStyles('service_packages')}>
        <Link to="/service_packages" className={`${containerName}-link`}>
          Пакеты
        </Link>
      </li>
      <li className={navItemStyles('about')}>
        <Link to="/about" className={`${containerName}-link`}>
          О компании
        </Link>
      </li>
      <li className={navItemStyles('contacts')}>
        <Link to="/contacts" className={`${containerName}-link`}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
