import React, { FC } from 'react';
import cn from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import { NavigationRoutesGroup } from '../types';

type NavbarProps = {
  containerName: string;
  routesList: NavigationRoutesGroup;
};

const Navbar: FC<NavbarProps> = ({ containerName, routesList }) => {
  const { pathname } = useLocation();

  const firstRoute = pathname.split('/').filter(el => el.length > 0)[0];

  const navItemStyles = (linkname: string): string => {
    return cn(`${containerName}-item`, {
      [`${containerName}-item--active`]: linkname === firstRoute,
    });
  };

  // {
  //   /* <li className={navItemStyles('tariffs')}>
  //       <Link to="/tariffs" className={`${containerName}-link`}>
  //         Тарифы
  //       </Link>
  //     </li> */
  // }

  return (
    <ul
      className={`${containerName} ${
        containerName === 'footer__nav'
          ? 'container container--padding-top'
          : 'container'
      }`}
    >
      {routesList.map(({ name, linkto }) => (
        <li className={navItemStyles(linkto)} key={name}>
          <Link to={`/${linkto}`} className={`${containerName}-link`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
