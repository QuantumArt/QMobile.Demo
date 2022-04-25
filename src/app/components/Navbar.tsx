import React, { FC } from 'react';

import { Link } from 'react-router-dom'
import NotFound from './NotFound';


const Navbar: FC = () => {


  return (
    <ul className='header-menu'>
      <li>
        <Link to="/tariffs">Тарифы</Link>
      </li>
      <li>
        <Link to="/services">Услуги</Link>
      </li>
    </ul>
  )
}

export default Navbar;
