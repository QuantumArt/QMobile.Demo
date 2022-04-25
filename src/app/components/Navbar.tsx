import React, { FC } from 'react';

import { Link, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';
import Test1 from './Test1';
import Test2 from './Test2';


const Navbar: FC = () => {


  return (
    <ul>
      <li>
        <Link to="/tariffs">Тарифы</Link>
      </li>
      <li>
        <Link to="/services">Услуги</Link>
      </li>
      <Routes>
        <Route path="/tariffs" element={<Test1 />} />
        <Route path="/services" element={<Test2 />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </ul>
  )
}

export default Navbar;
