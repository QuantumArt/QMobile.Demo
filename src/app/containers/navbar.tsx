import React from 'react';
import cn from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import { NavigationRoutesGroup } from '../types';

type NavbarProps = {
  containerName: string;
  routesList: NavigationRoutesGroup;
};

const Navbar = ({ containerName, routesList }: NavbarProps): JSX.Element => {
  const { pathname } = useLocation();

  const firstRoute = pathname.split('/').filter(el => el.length > 0)[0];

  const navItemStyles = (linkname: string): string =>
    cn(`${containerName}-item`, {
      [`${containerName}-item--active`]: linkname === firstRoute,
    });

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
      {routesList.map(({ name, linkTo }) => (
        <li className={navItemStyles(linkTo)} key={name}>
          <Link to={`/${linkTo}`} className={`${containerName}-link`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
